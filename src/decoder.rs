use libflate::gzip;
use std::io;
use wasm_bindgen::prelude::*;
use js_sys;

const SUPPORTED_FILE_ENDINGS: &[&str] = &["gz"];

#[wasm_bindgen(js_name = "extensionIsSupported")]
pub fn extension_is_supported(extension: &str) -> bool {
    SUPPORTED_FILE_ENDINGS.contains(&extension)
}

pub enum DecoderError {
    UnsupportedFileExtension,
    IoError(io::Error)
}

impl From<DecoderError> for JsValue {
    fn from(source: DecoderError) -> JsValue {
        match source {
            DecoderError::UnsupportedFileExtension => {
                JsValue::from_str("Unsupported File Extension")
            }
            DecoderError::IoError(io_error) => {
                JsValue::from_str(&format!("IO error: {}", io_error))
            }
        }
    }
}

#[wasm_bindgen]
pub struct Decoder;

#[wasm_bindgen]
impl Decoder {
    #[wasm_bindgen(constructor)]
    pub fn new(extension: &str) -> Result<Decoder, JsValue> {
        Ok(Decoder::from_file_extension(extension)?)
    }

    #[wasm_bindgen()]
    pub fn extract(&self, file: &JsValue) -> Result<Vec<u8>, JsValue>{
        let array = js_sys::Uint8Array::new(file);
        let buffer = array.to_vec();
        let unpacked = ungz(&buffer).map_err(DecoderError::IoError)?;
        Ok(unpacked)
    }
}

impl Decoder {
    /// Factory to choose the right decoder from the file extension
    fn from_file_extension(extension: &str) -> Result<Decoder, DecoderError> {
        match extension {
            "gz" => Ok(Decoder),
            _ => Err(DecoderError::UnsupportedFileExtension.into()),
        }
    }
}

fn ungz(bytes: &[u8]) -> io::Result<Vec<u8>> {
    let mut decoder = gzip::Decoder::new(bytes)?;
    let mut buf_out = Vec::new();
    io::copy(&mut decoder, &mut buf_out)?;
    Ok(buf_out)
}
