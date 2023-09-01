export const smoothScrollTo = (
  id: string,
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
): void => {
  event.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};
