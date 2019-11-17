
use libflate::gzip;
use std::io;
use wasm_bindgen::prelude::*;
/// Source archive the user has selected.
#[wasm_bindgen]
pub struct Source {
    buffer: Vec<u8>,
    decoder: Decoder,
}

#[wasm_bindgen]
impl Source {
    #[wasm_bindgen(constructor)]
    pub fn new(extension: &str, buffer: Vec<u8>) -> Source {
        let decoder = if extension == "gz" {
            Decoder::Gzip
        } else {
            Decoder::Unsupported
        };
        Source { decoder, buffer }
    }

    #[wasm_bindgen(js_name = extractingIsSupported)]
    pub fn extracting_is_supported(&self) -> bool {
        match self.decoder {
            Decoder::Unsupported => false,
            _ => true,
        }
    }

    pub fn size(&self) -> usize {
        self.buffer.len()
    }

    pub fn extract(&self) -> Vec<u8> {
        match self.decoder {
            Decoder::Gzip => ungz(&self.buffer).unwrap_or_else(|_| Vec::new()),
            Decoder::Unsupported => Vec::new(),
        }
    }
}

enum Decoder {
    Gzip,
    Unsupported,
}

fn ungz(bytes: &[u8]) -> io::Result<Vec<u8>> {
    let mut decoder = gzip::Decoder::new(bytes)?;
    let mut buf_out = Vec::new();
    io::copy(&mut decoder, &mut buf_out)?;
    Ok(buf_out)
}