defmodule QuillToPhoenixDemo.Repo do
  use Ecto.Repo,
    otp_app: :quill_to_phoenix_demo,
    adapter: Ecto.Adapters.Postgres
end
