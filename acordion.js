const openItem = item => {
    const container = item.closest(".komanda__item");
    const contentBlock = container.find(".komanda__text");
    const regHeight = textBlock.height();

    container.addClass("active");
    contentBlock.height(reqHeight);
}

const closeEveryItem = container => {
    const items = container.find('.komanda__text');
    const itemContainer = container.find(".komanda__item");

    itemContainer.removeClass("active");
    items.height(0);
}

$('.komanda-tel__button').click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest('.komanda');
    const elemContainer = $this.closest(".komanda__item");

    if (elemContainer.hasClass("active")) {
        closeEveryItem(container);
    }else {
        closeEveryItem(container);
        openItem($this);
    }


})