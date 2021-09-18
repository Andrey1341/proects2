const findBlockByAlias = alias => {
    return $(".revius__display-iner").filter((ndx, item) => {
        return $(item).attr("data-linked-width") === alias;
    });
};

$(".interactive__avatar-link").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const itemToShow = findBlockByAlias(target);
    const curItem = $this.closest(".revius__switcher-item");

    itemToShow.addClass("interactive__avatar--active").siblings().removeClass("interactive__avatar--active");
    curItem.addClass("interactive__avatar--active").siblings().removeClass("interactive__avatar--active");
});