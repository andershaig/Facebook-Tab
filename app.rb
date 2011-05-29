require 'rubygems'
require 'sinatra'

enable :sessions

helpers do
  def iframe(url)
    "<iframe id='preview' src='#{url}' frameborder=0 scrolling=no width='520px' height='auto' style='height:800px;'></iframe>"
  end
end

get '/' do
	erb :index
end

get '/*' do
	@preview_url = params[:splat]
	erb :preview, :layout => false
end