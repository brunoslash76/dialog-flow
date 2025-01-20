function init() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  const agentId = params['agent-id']
  const projectId = params['project-id']

  const dfComponent = document.querySelector('#dialog-flow')

  if (!agentId || !projectId) {
    alert("Agent ID or Project ID missing, Dialog Flow won't be working properlly!")
  }

  dfComponent.setAttribute('project-id', projectId)
  dfComponent.setAttribute('agent-id', agentId)

  console.log(dfComponent)
}

document.addEventListener('DOMContentLoaded', init)
