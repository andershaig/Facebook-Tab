require 'rubygems'
require 'sinatra'
require 'httparty'
require 'ruby-debug'
require 'base64'
require 'openssl'
require 'crack/json'

enable :sessions

APP_CONFIG = YAML.load_file("config.yml")

post '/' do
  erb :index
end

# Display Tab on Post
post '/tab' do
  erb :tab
end