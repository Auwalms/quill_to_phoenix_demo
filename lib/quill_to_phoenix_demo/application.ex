defmodule QuillToPhoenixDemo.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      QuillToPhoenixDemoWeb.Telemetry,
      QuillToPhoenixDemo.Repo,
      {DNSCluster, query: Application.get_env(:quill_to_phoenix_demo, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: QuillToPhoenixDemo.PubSub},
      # Start the Finch HTTP client for sending emails
      {Finch, name: QuillToPhoenixDemo.Finch},
      # Start a worker by calling: QuillToPhoenixDemo.Worker.start_link(arg)
      # {QuillToPhoenixDemo.Worker, arg},
      # Start to serve requests, typically the last entry
      QuillToPhoenixDemoWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: QuillToPhoenixDemo.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    QuillToPhoenixDemoWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
