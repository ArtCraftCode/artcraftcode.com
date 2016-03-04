# [artcraftcode.com](http://artcraftcode.com)

Hey, look! Some knitting.

## Adding a new pattern

1. Add primary and secondary colors to `$patternColors` in `source/stylesheets/_colors.scss`
2. Create a file from the pattern page template: `source/patterns/pattern_name.html.haml`
3. Replace the names with the `pattern_name` variable
4. Create a file from the pattern partial template: `source/_pattern_name.html.haml`
5. Create a file from the pattern ruby template: `lib/patterns/pattern_name.rb`
6. Require the ruby file in `lib/patterns/patterns.rb`
7. Add the pattern to the list of constants and the `ALL` constant in `lib/patterns/patterns.rb`
8. Add the helper reference to `helpers/pattern_helpers.rb`:

```ruby
def pattern_name
  Patterns::PATTERN_NAME
end
```

