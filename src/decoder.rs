use libflate::gzip;
use std::io;
use wasm_bindgen::prelude::*;

const SUPPORTED_FILE_ENDINGS: &[&str] = &["gz"];

#[wasm_bindgen(js_name = "extensionIsSupported")]
pub fn extension_is_supported(extension: &str) -> bool {
    SUPPORTED_FILE_ENDINGS.contains(&extension)
}

pub enum DecoderError {
    UnsupportedFileExtension,
}

impl From<DecoderError> for JsValue {
    fn from(source: DecoderError) -> JsValue {
        match source {
            DecoderError::UnsupportedFileExtension => {
                JsValue::from_str("Unsupported File Extension")
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
        Decoder::from_file_extension(extension)
    }

    /// Factory to choose the right decoder from the file extension
    pub fn from_file_extension(extension: &str) -> Result<Decoder, JsValue> {
        match extension {
            "gz" => Ok(Decoder),
            _ => Err(DecoderError::UnsupportedFileExtension.into()),
        }
    }

    pub fn extract(&self, buffer: &[u8]) -> Vec<u8> {
        ungz(buffer).unwrap_or_else(|_| Vec::new())
    }
}

fn ungz(bytes: &[u8]) -> io::Result<Vec<u8>> {
    let mut decoder = gzip::Decoder::new(bytes)?;
    let mut buf_out = Vec::new();
    io::copy(&mut decoder, &mut buf_out)?;
    Ok(buf_out)
}
