class GreetingSerializer
  include JSONAPI::Serializer
  attributes :message
end
