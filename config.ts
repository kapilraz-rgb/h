// Remapping MakeCode Arcade targets for your exact Joy-IT layout using the 2.0 Edge Connector Schema
namespace config {
    // 1. Data Signals mapped directly to your raw hardware channels
    export const PIN_DISPLAY_SCK = 13;   // SPI Clock linked to Pin 13
    export const PIN_DISPLAY_MOSI = 15;  // SDA Data linked to Pin 15
    export const PIN_DISPLAY_CS = 16;    // Chip Select linked to Pin 16
    export const PIN_DISPLAY_DC = 1;     // A0 / Data-Command linked to Pin 1

    // 2. Hardware lines tied straight to the permanent 3V Power Rail
    // We pass -1 or 0x00 depending on your exact firmware parser block to bypass compilation checks
    export const PIN_DISPLAY_RST = -1;   // Reset is hardwired to 3V (Skipped by code execution loop)
    export const PIN_DISPLAY_BL = -1;    // LED Backlight is hardwired to 3V
}
