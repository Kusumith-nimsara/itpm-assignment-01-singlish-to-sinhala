import { test, expect } from '@playwright/test';

test.describe('Sinhala Transliteration - 37 Test Cases', () => {

  const testCases = [

    // ================= POSITIVE FUNCTIONAL =================
    { id: "Pos_Fun_0001", name: "Greeting phrase", input: "oyaa hodhindha?", expected: "ඔයා හොදින්ද?" },
    { id: "Pos_Fun_0002", name: "Mixed-language input", input: "mama adha class yanavaa", expected: "මම අද class යනවා" },
    { id: "Pos_Fun_0003", name: "Short request", input: "eyaa Fight karayidha?", expected: "එයා Fight කරයිද?" },
    { id: "Pos_Fun_0004", name: "Simple sentence", input: "mallii bath kayi", expected: "මල්ලී බත් කයි" },
    { id: "Pos_Fun_0005", name: "Compound sentence", input: "mata nidhimathayi, mama passe kannam", expected: "මට නිදිමතයි, මම පස්සෙ කන්නම්" },
    { id: "Pos_Fun_0006", name: "Question sentence", input: "adha vaedata giye naedhdha?", expected: "අද වැඩට ගියෙ නැද්ද?" },
    { id: "Pos_Fun_0007", name: "Imperative", input: "othana inna", expected: "ඔතන ඉන්න" },
    { id: "Pos_Fun_0008", name: "Polite phrase", input: "karuNaakaralaa maava dhaala yanna epaa!", expected: "කරුණාකරලා මාව දාල යන්න එපා!" },
    { id: "Pos_Fun_0009", name: "Negative sentence", input: "mata yanna baehae", expected: "මට යන්න බැහැ" },
    { id: "Pos_Fun_0010", name: "Longsentence", input: "mata nokiyaa karapu vaedee nisaa amaaruve vatuNaa", expected: "මට නොකියා කරපු වැඩේ නිසා අමාරුවෙ වටුණා" },
    { id: "Pos_Fun_0011", name: "Thanks phrase", input: "godaak piQQ", expected: "ගොඩාක් පිං" },
    { id: "Pos_Fun_0012", name: "Apology phrase", input: "kaNagaatuyi!", expected: "කණගාටුයි!" },
    { id: "Pos_Fun_0013", name: "Instruction sentence", input: "araka harima kaethayi", expected: "අරක හරිම කැතයි" },
    { id: "Pos_Fun_0014", name: "Request sentence", input:  "tikakata mata dhenna puluvaNdha?", expected: "ටිකකට මට දෙන්න පුලුවණ්ද?" },
    { id: "Pos_Fun_0015", name: "Future tense", input: "gamana heta yamu", expected: "ගමන හෙට යමු" },
    { id: "Pos_Fun_0016", name: "Past tense", input: "edhaa vaahanaya aavee naee", expected: "එදා වාහනය ආවේ නෑ" },
    { id: "Pos_Fun_0017", name: "Emotional phrase", input: "eyaa mata adhareyi", expected: "එයා මට අදරෙයි" },
    { id: "Pos_Fun_0018", name: "Advice sentence", input: "ohoma karanna epaa", expected: "ඔහොම කරන්න එපා" },
    { id: "Pos_Fun_0019", name: "Motivation", input: "thava madhi", expected: "තව මදි" },
    { id: "Pos_Fun_0020", name: "Simple chat", input: "pansal giyaadha?", expected: "පන්සල් ගියාද?" },

    // ================= NEGATIVE FUNCTIONAL =================


    { id: "Neg_Fun_001", name: "Random symbols", input: "###kamuu", expected: "කණගාටුයි!" },
    { id: "Neg_Fun_002", name: "Alphanumeric", input: "ka34#ma8tha", expected: "ක34ම8ත" },
    { id: "Neg_Fun_003", name: "English only", input:  "we go class", expected: "අපි පන්ති යනවා" },
    { id: "Neg_Fun_004", name: "Wrong spelling", input: "kadugaNnaava", expected: "කඩුගන්නව" },
    { id: "Neg_Fun_005", name: "Slang input", input: "naee sahoo", expected: "නෑ සහෝ!" },
    { id: "Neg_Fun_006", name: "Mixed symbols", input: "eeka!! pudumayakdha?", expected: "ඒක!! පුදුමයක්ද?" },
    { id: "Neg_Fun_007", name: "Simple sentence", input: "ira paayayi", expected: "ඉර පායයි" },


    // ================= POSITIVE UI =================
    { id: "Pos_UI_0002", name: "Clear input", input: "api gamata yamu", expected: "" },
    { id: "Pos_UI_0003", name: "Font rendering", input: "oyaata pissudha?", expected: "ඔයාට පිස්සුද?" },
    { id: "Pos_UI_0004", name: "Text selection", input: "methana vadivenna", expected: "මෙතන වාඩිවෙන්න" },
    { id: "Pos_UI_0005", name: "Responsive display", input: "eeka ayemath venne naee", expected: "ඒක අයෙමත් වෙන්නෙ නෑ" },

    // // ================= NEGATIVE UI =================

    // { id: "Neg_UI_0002", name: "Overflow handling", input: "api".repeat(40), expected: "අපිඅපි අපි අපි අපි ".repeat(40) },
    // { id: "Neg_UI_0003", name: "Page reload behavior", input: "minisa vaeda karanavaa", expected: "Output resets" },
 

    // ================= EDGE CASES =================
    { id: "Edge_0001", name: "Very long input", input: "nimi".repeat(100), expected: "නිමි" },
    { id: "Edge_0002", name: "Emoji input", input: "oyaa 😊 / 😭 innavadha?", expected: "ඔයා 😊 / 😭 ඉන්නවද?" },
    { id: "Edge_0003", name: "Newline input", input: "kamal\nivaaduva", expected: "කමල්\නිවාඩුව" }

  ];

  for (const tc of testCases) {
  test(`${tc.id} - ${tc.name}`, async ({ page }) => {

    // 1. Navigate to the Swift Translator website
    await page.goto('https://www.swifttranslator.com/');

    // 2. Select the Singlish input textarea (using placeholder)
    const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
    const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';

    // Use chunked typing to simulate real user input so the site's IME processes sequences correctly.
    await page.fill(inputSelector, '');
    await inputArea.click();
    const text = tc.input;
    const CHUNK = 200; // characters per chunk to avoid Playwright typing timeouts
    if (text.length === 0) {
      // nothing to type
    } else if (text.length <= CHUNK) {
      await inputArea.type(text, { delay: 35 });
    } else {
      for (let i = 0; i < text.length; i += CHUNK) {
        const chunk = text.slice(i, i + CHUNK);
        await inputArea.type(chunk, { delay: 25 });
        // allow the page to process chunk
        await page.waitForTimeout(100);
      }
    }
    // Ensure compositionend/input events fired after typing
    await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (!el) return;
      el.dispatchEvent(new CompositionEvent('compositionend', { bubbles: true, cancelable: true, data: el.value }));
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }, inputSelector);

    // Special handling for the Clear-input UI test: click the first Clear button found
    if (tc.id === 'Pos_UI_0002') {
      const clearLocator = page.getByRole('button', { name: /clear/i });
      try {
        await clearLocator.first().click();
      } catch (err) {
        // Fallback: select-all + delete
        await inputArea.click();
        const modifier = process.platform === 'darwin' ? 'Meta' : 'Control';
        await page.keyboard.press(`${modifier}+A`);
        await page.keyboard.press('Backspace');
      }
    }

    // 3. Select the output box
    // Based on your HTML, it's a div with bg-slate-50 following the "Sinhala" title
    const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');

    // 4. Wait for the translation to appear (it's automatic)
    // We wait until the text content matches or contains our expected value
    // Allow more time for conversion on slower environments
    await expect(outputBox).toContainText(tc.expected, { timeout: 10000 });

    const output = await outputBox.textContent();
    console.log(`Running: ${tc.id} | Result: ${output}`);

    expect(output).toContain(tc.expected);
  });
}

});