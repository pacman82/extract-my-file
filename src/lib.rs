use wasm_bindgen::prelude::*;

#[wasm_bindgen(js_name = extractingIsSupported)]
/// Returns true if we support extracting files of the given type
pub fn extracting_is_supported(_extension: &str) -> bool {
    false
}