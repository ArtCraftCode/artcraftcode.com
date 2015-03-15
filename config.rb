set :haml, { :ugly => true, :format => :html5 }
set :markdown_engine, :redcarpet
set :markdown, :fenced_code_blocks => true, :smartypants => true

activate :directory_indexes

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

configure :development do
  activate :livereload
end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'test/images'

# Build-specific configuration
configure :build do
  activate :minify_css
  # test environment
  # set :css_dir, 'test/stylesheets'
  # set :js_dir, 'test/javascripts'
  # set :images_dir, 'test/images'
end
