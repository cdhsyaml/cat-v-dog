$(document).ready(function () {
  $("button#meow").click(function () {
    $("button#meow").before("<h2> Meow Meow, puppy dog</h2>");
    $("button#bark").before("<h2> Woof Woof, kitty cat </h2>");
  });
  $("button#bark").click(function () {
    $("button#meow").after("<h2> Meow Meow, puppy dog</h2>");
    $("button#bark").after("<h2> Woof Woof, kitty cat </h2>");
  });
});
