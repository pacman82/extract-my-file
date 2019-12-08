use js_sys;
use libflate::gzip;
use std::io;
use wasm_bindgen::prelude::*;

pub enum EncodeError {
    UnsupportedFileExtension,
    IoError(io::Error),
}

impl From<EncodeError> for JsValue {
    fn from(source: EncodeError) -> JsValue {
        match source {
            EncodeError::UnsupportedFileExtension => JsValue::from_str("Unsupported File Extension"),
            EncodeError::IoError(io_error) => JsValue::from_str(&format!("IO error: {}", io_error)),
        }
    }
}

#[wasm_bindgen]
pub struct Encoder;

#[wasm_bindgen]
impl Encoder {
    #[wasm_bindgen(constructor)]
    pub fn new(extension: &str) -> Result<Encoder, JsValue> {
        Ok(Encoder::from_file_extension(extension)?)
    }

    #[wasm_bindgen()]
    pub fn extract(&self, file: &JsValue) -> Result<Vec<u8>, JsValue> {
        let array = js_sys::Uint8Array::new(file);
        let buffer = array.to_vec();
        let unpacked = gz(&buffer).map_err(EncodeError::IoError)?;
        Ok(unpacked)
    }
}

impl Encoder {
    /// Factory to choose the right decoder from the file extension
    fn from_file_extension(extension: &str) -> Result<Encoder, EncodeError> {
        match extension {
            "gz" => Ok(Encoder),
            _ => Err(EncodeError::UnsupportedFileExtension.into()),
        }
    }
}

fn gz(mut bytes: &[u8]) -> io::Result<Vec<u8>> {
    let mut encoder = gzip::Encoder::new(Vec::new())?;
    io::copy(&mut bytes, &mut encoder)?;
    Ok(encoder.into_inner())
}
