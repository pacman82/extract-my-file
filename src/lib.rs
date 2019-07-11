use wasm_bindgen::prelude::*;
use libflate::gzip;
use std::io::{self, Read};

/// Source archive the user has selected.
#[wasm_bindgen]
pub struct Source {
    buffer: Vec<u8>,
    decoder: Decoder,
}

#[wasm_bindgen]
impl Source {
    pub fn new(extension: &str, buffer: Vec<u8>) -> Source {
        let decoder = if extension == "gz" {
            Decoder::Gzip
        } else {
            Decoder::Unsupported
        };
        Source {
            decoder, 
            buffer
        }
    }

    #[wasm_bindgen(js_name = extractingIsSupported)]
    pub fn extracting_is_supported(&self) -> bool {
        match self.decoder {
            Decoder::Unsupported => false,
            _ => true,
        }
    }

    pub fn size(&self) -> usize{
        self.buffer.len()
    }

    pub fn extract(&self) -> usize {
        match self.decoder {
            Decoder::Gzip => {
                ungz(&self.buffer).unwrap_or(0)
            },
            Decoder::Unsupported => 0,
        }
    }
}

enum Decoder {
    Gzip,
    Unsupported,
}

fn ungz(bytes: &[u8]) -> io::Result<usize> {
    let decoder = gzip::Decoder::new(bytes)?;
    Ok(decoder.bytes().count())
}