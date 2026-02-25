# Accessibility Testing Checklist

Use this checklist to verify accessibility compliance after implementing fixes.

---

## Pre-Testing Setup

- [ ] Start development server: `npm run dev`
- [ ] Open site in browser: `http://localhost:3000`
- [ ] Install browser extensions:
  - [ ] axe DevTools (Chrome/Firefox)
  - [ ] WAVE Evaluation Tool
  - [ ] Lighthouse (built into Chrome DevTools)

---

## 1. Keyboard Navigation Testing (30 minutes)

### Homepage Testing

**Navigate without mouse - use Tab, Shift+Tab, Enter, Space, Arrow keys only**

- [ ] **Skip Link:**
  - [ ] Press Tab from page top
  - [ ] Skip link becomes visible
  - [ ] Press Enter
  - [ ] Focus moves to main content

- [ ] **Header Navigation:**
  - [ ] Tab to logo link (visible focus indicator)
  - [ ] Tab through all nav links (Home, Science, Technical Analysis, Crystal Guide)
  - [ ] Each link shows visible focus indicator (green outline)
  - [ ] Tab to "Partner Portal" button
  - [ ] Press Enter on any link - navigates correctly

- [ ] **Mobile Menu (resize to <768px):**
  - [ ] Tab to menu button
  - [ ] Press Space or Enter to open menu
  - [ ] Menu opens and focus stays on button
  - [ ] Tab into menu - all links accessible
  - [ ] Press Escape - menu closes, focus returns to button
  - [ ] Verify focus doesn't get trapped

- [ ] **Main Content:**
  - [ ] Tab through all CTA buttons
  - [ ] Tab through all card links
  - [ ] Tab through comparison table
  - [ ] All interactive elements have visible focus

- [ ] **Footer:**
  - [ ] Tab through all footer links
  - [ ] Tab to Purrify external link
  - [ ] All links keyboard accessible

### Other Pages to Test

- [ ] `/science` - Tables are keyboard navigable
- [ ] `/blog` - All article links accessible
- [ ] `/blog/[slug]` - Back link and CTA accessible
- [ ] `/city/toronto` - All city-specific links work
- [ ] `/compare/crystal-vs-clay` - Comparison cards accessible

### Keyboard Navigation Pass Criteria

- [ ] No keyboard traps (can Tab forward and backward through everything)
- [ ] All interactive elements reachable
- [ ] Focus indicators visible at all times
- [ ] Logical tab order (top to bottom, left to right)
- [ ] Skip link works properly
- [ ] Mobile menu closes with Escape key

---

## 2. Screen Reader Testing (45 minutes)

### macOS VoiceOver Testing

**Enable:** Cmd + F5

#### Header Testing
- [ ] Navigate to site, VoiceOver announces page title
- [ ] Tab once - "Skip to main content link" announced
- [ ] Navigate with VO+Right Arrow through header
  - [ ] Logo link announces "Crystal Deodorant Protection homepage, link"
  - [ ] Nav items announce clearly
  - [ ] Partner Portal announces "opens in new window"

#### Content Structure
- [ ] Navigate by headings: VO + Cmd + H
  - [ ] H1 announced first: "The Science of Natural Odor Protection"
  - [ ] H2s in logical order
  - [ ] No heading level skips
- [ ] Navigate by landmarks: VO + U, then use arrow keys
  - [ ] Navigation landmark present
  - [ ] Main landmark present
  - [ ] Content info landmark (footer) present

#### Lists and Icons
- [ ] Navigate to benefits list
  - [ ] VoiceOver announces "List, 3 items"
  - [ ] Each item announces "Benefit: [text]" not just "checkmark"
  - [ ] No meaningless symbols announced

#### Tables
- [ ] Navigate to comparison table (Science page)
  - [ ] Table caption announced
  - [ ] Column headers announced when entering columns
  - [ ] Row headers announced when entering rows
  - [ ] Data cells properly associated with headers

#### Images
- [ ] Navigate by images: VO + Cmd + G
  - [ ] Hero background not announced (decorative)
  - [ ] Product images have descriptive alt text
  - [ ] No images announce generic "image" without description

#### Links
- [ ] Navigate by links: VO + Cmd + L
  - [ ] All links have descriptive text
  - [ ] "Read more" links include context
  - [ ] External links announce "opens in new window"
  - [ ] No duplicate "link link" announcements

### Windows NVDA Testing (if available)

- [ ] Install NVDA (free, open source)
- [ ] Repeat heading/landmark/table tests above
- [ ] Verify all ARIA labels announced correctly
- [ ] Test browse mode (arrow keys) and focus mode (Tab)

### Screen Reader Pass Criteria

- [ ] Page structure makes sense when navigated by headings
- [ ] All interactive elements clearly labeled
- [ ] Images have appropriate alternative text
- [ ] Tables are properly structured and navigable
- [ ] No meaningless content announced (icons, decorative images)
- [ ] External links clearly identified

---

## 3. Automated Testing (15 minutes)

### axe DevTools (Browser Extension)

1. Open any page
2. Open DevTools (F12)
3. Click "axe DevTools" tab
4. Click "Scan ALL of my page"
5. Review results

**Expected Results:**
- [ ] 0 Critical issues
- [ ] 0 Serious issues
- [ ] < 5 Moderate issues
- [ ] Needs Review items investigated

**Common Issues to Check:**
- [ ] All form elements have labels (if forms added)
- [ ] Color contrast passes
- [ ] ARIA attributes used correctly
- [ ] Heading order is logical

### Lighthouse (Chrome DevTools)

1. Open DevTools (F12)
2. Click "Lighthouse" tab
3. Select "Accessibility" category
4. Click "Analyze page load"

**Expected Results:**
- [ ] Accessibility score: 95-100
- [ ] All items in "Passed audits" section
- [ ] No items in "Opportunities" or "Diagnostics"

**Key Metrics:**
- [ ] `[aria-*]` attributes are valid
- [ ] `button`, `link`, and `menuitem` elements have accessible names
- [ ] Image elements have `[alt]` attributes
- [ ] Heading elements are in sequentially-descending order
- [ ] Links have a discernible name
- [ ] Lists contain only `<li>` elements
- [ ] `<html>` element has a `[lang]` attribute

### WAVE Web Accessibility Evaluation Tool

1. Install WAVE browser extension
2. Click WAVE icon on any page
3. Review sidebar results

**Expected Results:**
- [ ] 0 Errors (red icons)
- [ ] 0 Contrast Errors
- [ ] Green icons present (Features: ARIA labels, alt text, etc.)
- [ ] Investigate any yellow Alerts

### pa11y CLI Testing

```bash
# Install if not already installed
npm install -D pa11y

# Test homepage
npx pa11y http://localhost:3000

# Test specific pages
npx pa11y http://localhost:3000/science
npx pa11y http://localhost:3000/blog
npx pa11y http://localhost:3000/city/toronto
```

**Expected Results:**
- [ ] 0 Errors
- [ ] 0 Warnings
- [ ] All pages pass

---

## 4. Visual/Manual Inspection (20 minutes)

### Focus Indicators

- [ ] All links show green 3px outline when focused
- [ ] All buttons show green 3px outline + shadow when focused
- [ ] Focus indicators clearly visible on all backgrounds
- [ ] Focus indicators consistent across site

### Color Contrast

Visit each page and inspect text colors:

**Header:**
- [ ] "Protection Research" text is neutral-500 (not 400)
- [ ] Nav links have sufficient contrast

**Footer:**
- [ ] Footer links are neutral-200 (not 300)
- [ ] Footer text meets 4.5:1 ratio on dark background

**Body Content:**
- [ ] All body text at least 4.5:1 contrast
- [ ] Small text (< 18px) meets higher standard
- [ ] Badge text readable (yellow badge darkened to 900)

**Test with Chrome DevTools:**
1. Right-click any text
2. Inspect
3. Check "Contrast" in Styles panel
4. Verify checkmark (PASS) not X (FAIL)

### Heading Hierarchy

For each page, verify heading structure:

**Homepage:**
- [ ] One H1: "The Science of Natural Odor Protection"
- [ ] H2s for major sections
- [ ] H3s for subsections
- [ ] No skipped levels (e.g., H2 → H4)

**Blog Posts:**
- [ ] One H1 (article title)
- [ ] H2s for main sections in content
- [ ] H3s for FAQ questions

**City Pages:**
- [ ] One H1 (city name + topic)
- [ ] H2s for sections
- [ ] Logical flow top to bottom

### Alt Text Review

Check 5-10 images across site:

- [ ] Decorative images have `alt=""` and `role="presentation"`
- [ ] Informative images have descriptive alt text
- [ ] Alt text describes what's in image, not just name
- [ ] No "image of" or "picture of" in alt text
- [ ] Complex images have detailed descriptions

### Links

- [ ] No "click here" or "read more" without context
- [ ] All card links include hidden descriptive text
- [ ] External links note "(opens in new window)"
- [ ] Link text makes sense out of context

---

## 5. Responsive/Mobile Testing (15 minutes)

### Resize Browser to Mobile Width (375px)

- [ ] Skip link still visible when focused
- [ ] Mobile menu button accessible
- [ ] Mobile menu keyboard navigable
- [ ] All touch targets at least 44x44px
- [ ] No horizontal scrolling
- [ ] Text readable without zooming

### Touch Target Size

- [ ] All buttons at least 44x44px
- [ ] Links have adequate padding
- [ ] Menu items not too close together
- [ ] Mobile menu items easily tappable

### Zoom Testing

**Test at 200% zoom:**
- [ ] No content cut off
- [ ] No horizontal scrolling
- [ ] Text remains readable
- [ ] Focus indicators still visible
- [ ] Layout doesn't break

**Test at 400% zoom:**
- [ ] Content reflows properly
- [ ] Critical content still accessible
- [ ] No overlapping text

---

## 6. Browser Compatibility (30 minutes)

Test in multiple browsers:

### Chrome
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Screen reader compatible (ChromeVox)
- [ ] Lighthouse score 95+

### Firefox
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] ARIA attributes work
- [ ] Contrast ratios correct

### Safari (macOS)
- [ ] Keyboard navigation works (Tab key enabled in prefs)
- [ ] VoiceOver integration perfect
- [ ] Focus indicators visible
- [ ] Images load with alt text

### Edge
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Narrator compatibility
- [ ] Lighthouse score 95+

### Mobile Safari (iOS)
- [ ] VoiceOver gestures work
- [ ] All content accessible
- [ ] Zoom works properly
- [ ] Touch targets adequate

### Mobile Chrome (Android)
- [ ] TalkBack works correctly
- [ ] All content accessible
- [ ] Zoom works properly
- [ ] Touch targets adequate

---

## 7. Assistive Technology Testing (Advanced)

### JAWS (Windows - Commercial)

If you have access:
- [ ] Install JAWS screen reader
- [ ] Test complete navigation flow
- [ ] Verify all ARIA announcements
- [ ] Test forms mode vs browse mode
- [ ] Verify table navigation

### NVDA (Windows - Free)

- [ ] Download from nvaccess.org
- [ ] Test all pages with NVDA running
- [ ] Navigate by headings (H key)
- [ ] Navigate by landmarks (D key)
- [ ] Navigate by links (K key)
- [ ] Test table navigation (T key, Ctrl+Alt+arrows)

### VoiceOver (macOS/iOS - Built-in)

**macOS:**
- [ ] Enable: Cmd + F5
- [ ] Complete navigation of homepage
- [ ] Test rotor navigation (VO + U)
- [ ] Verify all images described
- [ ] Test table navigation

**iOS:**
- [ ] Enable in Settings > Accessibility
- [ ] Swipe right through all content
- [ ] Use rotor to navigate by headings
- [ ] Verify all interactive elements accessible

---

## 8. Regression Testing After Fixes

After implementing accessibility fixes, retest:

### Quick Regression Test (15 minutes)

- [ ] Skip link still works
- [ ] Mobile menu still functions
- [ ] Tables still properly formatted
- [ ] Images still load
- [ ] All links still work
- [ ] No visual regressions
- [ ] Site still looks correct
- [ ] No broken layouts

### Full Accessibility Retest

- [ ] Re-run automated tests (axe, Lighthouse, pa11y)
- [ ] Verify all previous issues resolved
- [ ] Check for new issues introduced
- [ ] Document any remaining issues

---

## Pass/Fail Criteria

### Must Pass (Zero Tolerance)

- [ ] **WCAG 2.1 Level A:** All criteria met
- [ ] **WCAG 2.1 Level AA:** All criteria met
- [ ] **Zero critical issues** in automated tests
- [ ] **Keyboard accessible:** All functionality available
- [ ] **Screen reader compatible:** All content accessible
- [ ] **Color contrast:** All text meets 4.5:1 minimum

### Should Pass (Best Practices)

- [ ] Lighthouse accessibility score 95+
- [ ] axe DevTools shows 0 serious issues
- [ ] Logical heading hierarchy
- [ ] Descriptive link text
- [ ] Proper ARIA usage (not overused)
- [ ] Semantic HTML preferred over ARIA
- [ ] Mobile friendly and responsive

---

## Issue Tracking Template

Use this template to document any issues found:

```markdown
### Issue: [Brief description]

**Page:** /path/to/page
**Severity:** Critical | High | Medium | Low
**WCAG Criterion:** [e.g., 1.1.1 Non-text Content]

**Current Behavior:**
[What happens now]

**Expected Behavior:**
[What should happen]

**Steps to Reproduce:**
1. Navigate to page
2. Tab to element
3. Issue occurs

**Proposed Fix:**
[Code change or solution]

**Files to Modify:**
- /path/to/file.tsx
```

---

## Testing Sign-Off

After completing all tests, document results:

```markdown
## Accessibility Testing Sign-Off

**Date:** [Date]
**Tester:** [Name]
**Site Version:** [Commit hash or version]

### Test Results

- Keyboard Navigation: PASS / FAIL
- Screen Reader (VoiceOver): PASS / FAIL
- Screen Reader (NVDA): PASS / FAIL
- Automated Tests (axe): Score [X]
- Automated Tests (Lighthouse): Score [X]
- Color Contrast: PASS / FAIL
- WCAG 2.1 Level A: PASS / FAIL
- WCAG 2.1 Level AA: PASS / FAIL

### Issues Found: [Number]
- Critical: [Number]
- High: [Number]
- Medium: [Number]
- Low: [Number]

### Recommendation:
- [ ] Ready for production
- [ ] Requires fixes before production
- [ ] Requires additional testing

**Notes:**
[Any additional comments]
```

---

## Resources

- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Keyboard Testing](https://webaim.org/articles/keyboard/)
- [WebAIM Screen Reader Testing](https://webaim.org/articles/screenreader_testing/)
- [axe DevTools Documentation](https://www.deque.com/axe/devtools/)
- [VoiceOver Commands](https://www.apple.com/voiceover/info/guide/)
- [NVDA User Guide](https://www.nvaccess.org/files/nvda/documentation/userGuide.html)

---

**Note:** This checklist should be completed for each major release and after any significant UI changes.
