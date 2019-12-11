function getter() {
  const html = document;

  return $(html)
    .find(".current_price")
    .text();
}
