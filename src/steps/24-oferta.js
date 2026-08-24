import { CONTENT } from '../data/content.data.js';
import { TESTIMONIALS_STEP24 } from '../data/testimonials.data.js';
import { AUTHOR_NAME, AUTHOR_BIO, AUTHOR_PHOTO, CHECKOUT_URL } from '../data/placeholders.data.js';
import { createButton } from '../ui/button.js';
import { createBadge } from '../ui/badge.js';
import { createTestimonialCard } from '../ui/testimonialCard.js';
import { createMediaSlot } from '../ui/mediaSlot.js';
import { createShieldCheckIcon } from '../ui/shieldCheckIcon.js';
import { appendHighlightedText } from '../ui/highlightText.js';
import { interpolate } from '../engine/interpolate.js';

function goToCheckout() {
  if (/^https?:\/\//.test(CHECKOUT_URL)) {
    window.location.href = CHECKOUT_URL;
  }
}

function createBonusList(items, ctx) {
  const ul = document.createElement('ul');
  ul.className = 'bonus-list';

  items.forEach((item) => {
    const li = document.createElement('li');

    const check = document.createElement('span');
    check.className = 'check-icon';
    check.textContent = '✓';
    li.appendChild(check);

    const textWrap = document.createElement('span');
    textWrap.appendChild(document.createTextNode(item.label));

    if (item.highlightSuffix) {
      textWrap.appendChild(document.createTextNode(' '));
      const strong = document.createElement('strong');
      strong.className = 'bonus-list__highlight';
      strong.textContent = interpolate(item.highlightSuffix, ctx);
      textWrap.appendChild(strong);
    }

    if (item.value) {
      const value = document.createElement('span');
      value.className = 'bonus-list__value';
      value.textContent = item.value;
      textWrap.appendChild(value);
    }

    li.appendChild(textWrap);
    ul.appendChild(li);
  });

  return ul;
}

function createCrossList(labels) {
  const ul = document.createElement('ul');
  ul.className = 'cross-list';

  labels.forEach((label) => {
    const li = document.createElement('li');
    const cross = document.createElement('span');
    cross.className = 'cross-icon';
    cross.textContent = '✗';
    const text = document.createElement('span');
    text.textContent = label;
    li.append(cross, text);
    ul.appendChild(li);
  });

  return ul;
}

export function render(container, ctx) {
  const content = CONTENT.oferta;
  const wrap = document.createElement('div');
  wrap.className = 'step step--offer';

  const title = document.createElement('h1');
  title.className = 'step-title';
  appendHighlightedText(title, interpolate(content.title, ctx), content.titleHighlight);
  wrap.appendChild(title);

  const subtitle = document.createElement('p');
  subtitle.className = 'step-subtitle';
  subtitle.textContent = content.subtitle;
  wrap.appendChild(subtitle);

  const offerCard = document.createElement('div');
  offerCard.className = 'offer-card';

  const badgeRow = document.createElement('div');
  badgeRow.className = 'offer-card__badges';
  content.badges.forEach((b) => {
    badgeRow.appendChild(createBadge(b, 'outline'));
  });
  offerCard.appendChild(badgeRow);

  const offerTitle = document.createElement('h2');
  offerTitle.className = 'offer-card__title';
  offerTitle.textContent = content.offerTitle;
  offerCard.appendChild(offerTitle);

  const offerSubtitle = document.createElement('p');
  offerSubtitle.className = 'offer-card__subtitle';
  offerSubtitle.textContent = content.offerSubtitle;
  offerCard.appendChild(offerSubtitle);

  const includedTitle = document.createElement('p');
  includedTitle.className = 'offer-card__included-title';
  includedTitle.textContent = content.includedTitle;
  offerCard.appendChild(includedTitle);

  offerCard.appendChild(createBonusList(content.includedItems, ctx));

  const priceBlock = document.createElement('div');
  priceBlock.className = 'price-block';
  const priceOld = document.createElement('span');
  priceOld.className = 'price-block__old';
  priceOld.textContent = content.priceOld;
  const priceNew = document.createElement('span');
  priceNew.className = 'price-block__new';
  priceNew.textContent = content.priceNew;
  priceBlock.append(priceOld, priceNew);
  offerCard.appendChild(priceBlock);

  const priceFootnote = document.createElement('p');
  priceFootnote.className = 'step-footnote';
  priceFootnote.textContent = content.priceFootnote;
  offerCard.appendChild(priceFootnote);

  const cta1 = createButton({ label: content.cta1, variant: 'invert', onClick: goToCheckout });
  offerCard.appendChild(cta1);

  wrap.appendChild(offerCard);

  const payNote = document.createElement('p');
  payNote.className = 'step-footnote';
  payNote.textContent = content.payNote;
  wrap.appendChild(payNote);

  const guaranteeBox = document.createElement('div');
  guaranteeBox.className = 'guarantee-box';

  const guaranteeIcon = document.createElement('div');
  guaranteeIcon.className = 'guarantee-box__icon';
  guaranteeIcon.appendChild(createShieldCheckIcon());
  guaranteeBox.appendChild(guaranteeIcon);

  const guaranteeContent = document.createElement('div');
  guaranteeContent.className = 'guarantee-box__content';
  const guaranteeTitle = document.createElement('h3');
  guaranteeTitle.textContent = content.guaranteeTitle;
  const guaranteeText = document.createElement('p');
  guaranteeText.textContent = content.guaranteeText;
  guaranteeContent.append(guaranteeTitle, guaranteeText);
  guaranteeBox.appendChild(guaranteeContent);

  wrap.appendChild(guaranteeBox);

  const socialProofLine = document.createElement('p');
  socialProofLine.className = 'step-subtitle';
  socialProofLine.textContent = content.socialProofLine;
  wrap.appendChild(socialProofLine);

  const testimonials = document.createElement('div');
  testimonials.className = 'testimonial-list';
  TESTIMONIALS_STEP24.forEach((t) => testimonials.appendChild(createTestimonialCard(t)));
  wrap.appendChild(testimonials);

  const recapBox = document.createElement('div');
  recapBox.className = 'recap-box';

  const recapTitle = document.createElement('h2');
  recapTitle.className = 'step-subheading';
  recapTitle.textContent = content.recapTitle;
  recapBox.appendChild(recapTitle);

  content.recapParagraphs.forEach((p) => {
    const para = document.createElement('p');
    para.className = 'step-paragraph';
    para.textContent = interpolate(p, ctx);
    recapBox.appendChild(para);
  });

  const notNeedTitle = document.createElement('p');
  notNeedTitle.className = 'step-paragraph';
  const notNeedStrong = document.createElement('strong');
  notNeedStrong.textContent = content.notNeedTitle;
  notNeedTitle.appendChild(notNeedStrong);
  recapBox.appendChild(notNeedTitle);

  recapBox.appendChild(createCrossList(content.notNeedItems));

  content.recapClosing.forEach((p) => {
    const para = document.createElement('p');
    para.className = 'step-paragraph';
    para.textContent = p;
    recapBox.appendChild(para);
  });

  wrap.appendChild(recapBox);

  const cta2 = createButton({ label: content.cta2, variant: 'primary', onClick: goToCheckout });
  wrap.appendChild(cta2);

  const aboutSection = document.createElement('div');
  aboutSection.className = 'author-section';

  const aboutTitle = document.createElement('h2');
  aboutTitle.className = 'step-subheading';
  aboutTitle.textContent = content.aboutTitle;
  aboutSection.appendChild(aboutTitle);

  aboutSection.appendChild(
    createMediaSlot({ src: AUTHOR_PHOTO, alt: 'Foto da autora', aspectRatio: '1 / 1', shape: 'circle' })
  );

  const authorName = document.createElement('p');
  authorName.className = 'author-section__name';
  authorName.textContent = AUTHOR_NAME;
  aboutSection.appendChild(authorName);

  const authorBio = document.createElement('p');
  authorBio.className = 'step-paragraph';
  authorBio.textContent = `Prazer, sou ${AUTHOR_NAME}. ${AUTHOR_BIO}`;
  aboutSection.appendChild(authorBio);

  const aboutClosing = document.createElement('p');
  aboutClosing.className = 'step-paragraph';
  aboutClosing.textContent = content.aboutClosing;
  aboutSection.appendChild(aboutClosing);

  wrap.appendChild(aboutSection);

  const cta3 = createButton({ label: content.cta3, variant: 'primary', onClick: goToCheckout });
  wrap.appendChild(cta3);

  container.appendChild(wrap);
}
