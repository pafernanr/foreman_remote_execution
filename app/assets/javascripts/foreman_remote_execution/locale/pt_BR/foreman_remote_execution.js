 locales['foreman_remote_execution'] = locales['foreman_remote_execution'] || {}; locales['foreman_remote_execution']['pt_BR'] = {
  "domain": "foreman_remote_execution",
  "locale_data": {
    "foreman_remote_execution": {
      "": {
        "Project-Id-Version": "foreman_remote_execution 9.0.1",
        "Report-Msgid-Bugs-To": "",
        "PO-Revision-Date": "2016-02-15 13:54+0000",
        "Last-Translator": "FULL NAME <EMAIL@ADDRESS>",
        "Language-Team": "Portuguese (Brazil) (http://www.transifex.com/foreman/foreman/language/pt_BR/)",
        "MIME-Version": "1.0",
        "Content-Type": "text/plain; charset=UTF-8",
        "Content-Transfer-Encoding": "8bit",
        "Language": "pt_BR",
        "Plural-Forms": "nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;",
        "lang": "pt_BR",
        "domain": "foreman_remote_execution",
        "plural_forms": "nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;"
      },
      "Another interface is already set as execution. Are you sure you want to use this one instead?": [
        "Uma outra interface já está definida para execução. Tem certeza que deseja usar esta? "
      ],
      "There was an error while updating the status, try refreshing the page.": [
        "Houve um erro durante a atualização deste status, tente recarregar a página. "
      ],
      "List foreign input sets": [
        "Listar conjuntos de entradas externas "
      ],
      "Show foreign input set details": [
        "Exibir detalhes do conjunto de entradas externas"
      ],
      "Target template ID": [
        "ID do modelo de destino "
      ],
      "Include all inputs from the foreign template": [
        "Incluir todas as entradas do modelo externo "
      ],
      "A comma separated list of input names to be included from the foreign template.": [
        "Uma lista separada por vírgula dos nomes de entrada a serem incluídos a partir do modelo externo. "
      ],
      "Input set description": [
        "Descrição do conjunto de dados"
      ],
      "Create a foreign input set": [
        "Criar um conjunto de entradas externas"
      ],
      "Delete a foreign input set": [
        "Remover um conjunto de entradas externas"
      ],
      "Update a foreign input set": [
        "Atualizar um conjunto de entradas externas"
      ],
      "List job invocations": [
        "Listar invocações de trabalho "
      ],
      "Show job invocation": [
        "Exibir invocações de trabalho"
      ],
      "Show Job status for the hosts": [
        "Mostrar o status do trabalho para os anfitriões"
      ],
      "The job template to use, parameter is required unless feature was specified": [
        "O modelo de trabalho a ser usado. O parâmetro é obrigatórios, a não ser que o recurso seja especificado."
      ],
      "Invocation type, one of %s": [
        "Tipo de invocação, um dos %s"
      ],
      "Execute the jobs on hosts in randomized order": [
        "Executar os trabalhos em hosts em ordem aleatória"
      ],
      "Inputs to use": [
        "Entradas a serem usadas"
      ],
      "SSH provider specific options": [
        "Opções específicas do provedor SSH "
      ],
      "What user should be used to run the script (using sudo-like mechanisms). Defaults to a template parameter or global setting.": [
        "O usuário que deve ser usado para executar o script (usando mecanismos do tipo sudo). Usa um parâmetro de modelo ou configuração global como padrão. "
      ],
      "Set password for effective user (using sudo-like mechanisms)": [
        "Definir senha para usuário efetivo (usando mecanismos do tipo sudo-like)"
      ],
      "Set SSH user": [
        ""
      ],
      "Set SSH password": [
        "Definir senha SSH"
      ],
      "Set SSH key passphrase": [
        "Definir frase chave SSH"
      ],
      "Create a recurring job": [
        "Criar um trabalho recorrente "
      ],
      "How often the job should occur, in the cron format": [
        "A frequência com que um trabalho deve ocorrer, no formato cron "
      ],
      "Repeat a maximum of N times": [
        "Repetir no máximo N vezes "
      ],
      "Perform no more executions after this time": [
        "Não desempenhar execuções depois deste período"
      ],
      "Designation of a special purpose": [
        "Designação de um propósito especial"
      ],
      "Schedule the job to start at a later time": [
        "Agendar o trabalho para começar mais tarde "
      ],
      "Schedule the job for a future time": [
        "Agendar o trabalho para depois "
      ],
      "Indicates that the action should be cancelled if it cannot be started before this time.": [
        "Indica que a ação deve ser cancelada se não puder ser iniciada antes deste período."
      ],
      "Control concurrency level and distribution over time": [
        "Controlar nível de simultaneidade e distribuição ao longo do tempo"
      ],
      "Run at most N tasks at a time": [
        "Executar no máximo N tarefas de cada vez "
      ],
      "Override the description format from the template for this invocation only": [
        "Substituir o formato de descrição do template somente para esta invocação"
      ],
      "Override the timeout interval from the template for this invocation only": [
        "Substituir o intervalo de tempo limite do limite apenas para esta invocação"
      ],
      "Remote execution feature label that should be triggered, job template assigned to this feature will be used": [
        "O rótulo do recurso de execução remota que deve ser acionado. O template de trabalho atribuído a esse recurso será usado."
      ],
      "Override the global time to pickup interval for this invocation only": [
        ""
      ],
      "Create a job invocation": [
        "Criar uma invocação de trabalho "
      ],
      "Get output for a host": [
        "Obter saída para um host "
      ],
      "Get raw output for a host": [
        "Obter saída não processada para um host"
      ],
      "Cancel job invocation": [
        "Cancelar invocação de trabalho"
      ],
      "The job could not be cancelled.": [
        "Não foi possível cancelar o trabalho."
      ],
      "Rerun job on failed hosts": [
        "Executar novamente nos hosts com falha "
      ],
      "Could not rerun job %{id} because its template could not be found": [
        "Não foi possível executar a tarefa %{id} novamente porque seu modelo não foi encontrado"
      ],
      "Get outputs of hosts in a job": [
        "Obter resultados dos anfitriões em um trabalho"
      ],
      "Host with id '%{id}' was not found": [
        "Host com id '%{id}' não foi localizado"
      ],
      "Only one of feature or job_template_id can be specified": [
        "Apenas um dos recursos ou job_template_id pode ser especificado"
      ],
      "List job templates": [
        "Listar modelos de trabalho"
      ],
      "List job templates per location": [
        "Listar modelos de trabalho por localização "
      ],
      "List job templates per organization": [
        "Listar modelos de trabalho por organização "
      ],
      "Import a job template from ERB": [
        "Importar um modelo de trabalho do ERB "
      ],
      "Template ERB": [
        "Modelo ERB"
      ],
      "Overwrite template if it already exists": [
        "Sobrescrever modelo, caso ele já exista "
      ],
      "Export a job template to ERB": [
        "Exportar um modelo de trabalho para o ERB "
      ],
      "Show job template details": [
        "Exibir detalhes do modelo de trabalho"
      ],
      "Template name": [
        "Nome do modelo"
      ],
      "Job category": [
        "Categoria de trabalho"
      ],
      "This template is used to generate the description. Input values can be used using the syntax %{package}. You may also include the job category and template name using %{job_category} and %{template_name}.": [
        "Este modelo é usado para gerar a descrição. Os valores de entrada podem ser usados com a sintaxe %{package}. Você pode incluir também a categoria de trabalho e o nome do modelo usando %{job_category} e %{template_name}."
      ],
      "Provider type": [
        "Tipo de provedor"
      ],
      "Whether or not the template is locked for editing": [
        "Se seu modelo está travado ou não para edição."
      ],
      "Effective user options": [
        "Opções do usuário efetivo"
      ],
      "What user should be used to run the script (using sudo-like mechanisms)": [
        "O usuário que deve ser usado para executar o script (usando mecanismos do tipo sudo)"
      ],
      "Whether it should be allowed to override the effective user from the invocation form.": [
        "Se deve ser permitida ou não a substituição do usuário efetivo do formulário de invocação. "
      ],
      "Whether the current user login should be used as the effective user": [
        "Se o login do usuário atual deve ser usado ou não como o usuário efetivo "
      ],
      "Create a job template": [
        "Criar um modelo de trabalho"
      ],
      "Update a job template": [
        "Atualizar um modelo de trabalho"
      ],
      "Template version": [
        "Versão do modelo"
      ],
      "Delete a job template": [
        "Remover um modelo de trabalho "
      ],
      "Clone a provision template": [
        "Clonar um modelo de provisão"
      ],
      "List remote execution features": [
        "Listar recursos de execução remota "
      ],
      "Show remote execution feature": [
        "Exibir recurso de execução remota "
      ],
      "Job template ID to be used for the feature": [
        "ID do modelo de trabalho a ser usada para o recurso "
      ],
      "List available remote execution features for a host": [
        ""
      ],
      "List template invocations belonging to job invocation": [
        "Listar invocações de template pertencentes à invocação da tarefa"
      ],
      "Identifier of the Host interface for Remote execution": [
        "Identificador da interface do Host para execução remota"
      ],
      "Set 'host_registration_remote_execution_pull' parameter for the host. If it is set to true, pull provider client will be deployed on the host": [
        ""
      ],
      "List of proxy IDs to be used for remote execution": [
        "Lista de identificações proxy a serem usadas para execução remota"
      ],
      "Trying to abort the job": [
        "Tentando anular o trabalho"
      ],
      "Trying to cancel the job": [
        "Tentando cancelar o trabalho"
      ],
      "The job cannot be aborted at the moment.": [
        "No momento, o trabalho não pode ser anulado."
      ],
      "The job cannot be cancelled at the moment.": [
        "O trabalho não pode ser cancelado no momento. "
      ],
      "Problem with previewing the template: %{error}. Note that you must save template input changes before you try to preview it.": [
        "Problemas com a visualização do modelo: %{error}. Observe que você deve salvar as alterações das entradas do modelo antes de tentar visualizá-las."
      ],
      "Job template imported successfully.": [
        "Modelo de trabalho importado com êxito. "
      ],
      "Unable to save template. Correct highlighted errors": [
        "Não foi possível salvar o template. Corrija os erros em destaque "
      ],
      "Run": [
        "Executar"
      ],
      "Schedule Remote Job": [
        "Agendar trabalho remoto"
      ],
      "Jobs": [
        "Trabalhos"
      ],
      "Job invocations": [
        "Invocações de trabalho"
      ],
      "%s": [
        "%s"
      ],
      "Web Console": [
        "Console web"
      ],
      "Success": [
        "Sucesso"
      ],
      "Failed": [
        "Falhou"
      ],
      "Pending": [
        "Pendente"
      ],
      "Cancelled": [
        "Cancelada"
      ],
      "queued to start executing in %{time}": [
        "em fila para começar a executar em %{time}"
      ],
      "queued": [
        "em fila"
      ],
      "running %{percent}%%": [
        "funcionando %{percent}%%"
      ],
      "succeeded": [
        "com êxito "
      ],
      "cancelled": [
        "cancelado(a)"
      ],
      "failed": [
        "falha"
      ],
      "unknown status": [
        "status desconhecido"
      ],
      "Any Organization": [
        "Qualquer organização"
      ],
      "Any Location": [
        "Qualquer localização"
      ],
      "error": [
        "erro"
      ],
      "Host detail": [
        "Detalhes do host"
      ],
      "Rerun on %s": [
        "Repetição %s"
      ],
      "Host task": [
        "Tarefa do host"
      ],
      "N/A": [
        "N/D"
      ],
      "Run Job": [
        "Executar Trabalho"
      ],
      "Create Report": [
        "Criar relatório"
      ],
      "Create report for this job": [
        "Criar relatório para este trabalho"
      ],
      "Rerun": [
        "Executar novamente"
      ],
      "Rerun the job": [
        "Executar novamente o trabalho"
      ],
      "Rerun failed": [
        "Falha em nova execução "
      ],
      "Rerun on failed hosts": [
        "Executar novamente em hosts com falha "
      ],
      "Job Task": [
        "Tarefa de trabalho "
      ],
      "See the last task details": [
        "Visualizar os detalhes mais recentes da tarefa "
      ],
      "Cancel Job": [
        "Cancelar trabalho"
      ],
      "Try to cancel the job": [
        "Tentar cancelar o trabalho "
      ],
      "Abort Job": [
        "Sobre o trabalho"
      ],
      "Try to abort the job without waiting for the results from the remote hosts": [
        "Tente anular o trabalho sem esperar os resultados dos hosts remotos"
      ],
      "New UI": [
        ""
      ],
      "Switch to the new job invocation detail UI": [
        ""
      ],
      "Task Details": [
        "Detalhes da tarefa"
      ],
      "See the task details": [
        "Visualizar os detalhes da tarefa "
      ],
      "Try to cancel the job on a host": [
        "Tentar cancelar o trabalho em um host "
      ],
      "Try to abort the job on a host without waiting for its result": [
        "Tente anular o trabalho em um host sem esperar o resultado"
      ],
      "Could not render the preview because no host matches the search query.": [
        "Não foi possível renderizar a visualização porque nenhum host corresponde à consulta de pesquisa."
      ],
      "in %s": [
        "em %s"
      ],
      "%s ago": [
        "%s atrás"
      ],
      "Use default description template": [
        "Usar modelo de descrição padrão"
      ],
      "Description template": [
        "Modelo de descrição"
      ],
      "This template is used to generate the description.<br/>Input values can be used using the syntax %{package}.<br/>You may also include the job category and template<br/>name using %{job_category} and %{template_name}.": [
        "Este modelo é usado para gerar a descrição.<br/>Os valores de entrada podem ser usados usando a sintaxe %{package}.<br/>Você também pode incluir a categoria de trabalho e o nome do modelo<br/>usando %{job_category} e %{template_name}."
      ],
      "Could not use any template used in the job invocation": [
        "Não foi possível usar nenhum modelo utilizado na invocação de trabalho "
      ],
      "Failed rendering template: %s": [
        "Falha ao renderizar modelo: %s"
      ],
      "Task cancelled": [
        "Tarefa cancelada"
      ],
      "Job execution failed": [
        "Falha ao executar o trabalho"
      ],
      "%{description} on %{host}": [
        "%{description} em %{host}"
      ],
      "Remote action:": [
        "Ação remota:"
      ],
      "Job cancelled by user": [
        "Trabalho cancelado pelo usuário"
      ],
      "Exit status: %s": [
        "Estado de saída: %s"
      ],
      "Job finished with error": [
        "Trabalho concluído com erro"
      ],
      "Error loading data from proxy": [
        "Erro ao carregar dados do proxy"
      ],
      "User can not execute job on host %s": [
        "O usuário não pode executar trabalho no host %s"
      ],
      "User can not execute this job template": [
        "O usuário não pode executar este modelo de trabalho "
      ],
      "User can not execute job on infrastructure host %s": [
        "O usuário não pode executar o trabalho no host de infra-estrutura %s"
      ],
      "User can not execute this job template on %s": [
        "O usuário não pode executar este modelo de trabalho em %s"
      ],
      "The only applicable proxy %{proxy_names} is down": [
        "O único proxy aplicável %{proxy_names} está inoperante",
        "Todos os %{count} proxies aplicáveis estão inoperantes. Tentados: %{proxy_names}",
        "Todos os %{count} proxies aplicáveis estão inoperantes. Tentados: %{proxy_names}"
      ],
      "Could not use any proxy for the %{provider} job. Consider configuring %{global_proxy}, %{fallback_proxy} in settings": [
        "Não foi possível utilizar nenhum representante para o trabalho %{provider}. Considere configurar o %{global_proxy}, %{fallback_proxy} em configurações"
      ],
      "REX job has succeeded - %s": [
        "O trabalho da REX foi bem sucedido... %s"
      ],
      "REX job has failed - %s": [
        "O trabalho da REX falhou - %s"
      ],
      "included template '%s' not found": [
        "modelo '%s' incluído não localizado"
      ],
      "input macro with name '%s' used, but no input with such name defined for this template": [
        "macro de entrada com nome '%s' usado, mas nenhuma entrada com tal nome foi definida para este modelo"
      ],
      "Unable to fetch public key": [
        "Não é possível capturar chave pública "
      ],
      "Unable to remove host from known hosts": [
        "Não é possível remover o host de hosts conhecidos"
      ],
      "REX job has finished - %s": [
        "O trabalho do REX terminou - %s"
      ],
      "Should this interface be used for remote execution?": [
        "Esta interface deve ser usada para execução remota?"
      ],
      "Interface with the '%s' identifier was specified as a remote execution interface, however the interface was not found on the host. If the interface exists, it needs to be created in Foreman during the registration.": [
        "A interface com o identificador '%s' foi especificada como uma interface de execução remota, porém a interface não foi encontrada no host. Se a interface existir, ela precisa ser criada no Foreman durante o registro."
      ],
      "host already has an execution interface": [
        "o host já possui uma interface de execução"
      ],
      "This template is locked. Please clone it to a new template to customize.": [
        "Este modelo está travado. Clone-o para um novo modelo para padronizar."
      ],
      "Circular dependency detected in foreign input set '%{template}' -> '%{target_template}'. Templates stack: %{templates_stack}": [
        "Dependência circular detectada em conjunto de entradas externas '%{template}' -> '%{target_template}'. Pilha de templates: %{templates_stack}"
      ],
      "Execution": [
        "Execução"
      ],
      "Last execution succeeded": [
        "Última execução bem-sucedida "
      ],
      "No execution finished yet": [
        "Nenhuma execução concluída ainda "
      ],
      "Last execution cancelled": [
        "Última execução cancelada"
      ],
      "Last execution failed": [
        "Falha na última execução "
      ],
      "Unknown execution status": [
        "Status de execução desconhecido"
      ],
      "Recursive rendering of templates detected": [
        "Renderização recursiva de modelos detectada "
      ],
      "error during rendering: %s": [
        "erro durante renderização: %s"
      ],
      "template": [
        "template"
      ],
      "Cannot specify both bookmark_id and search_query": [
        "Não é possível especificar tanto bookmark_id quanto search_query"
      ],
      "Unknown input %{input_name} for template %{template_name}": [
        "Entrada desconhecida %{input_name} para modelo{template_name}"
      ],
      "Template with id '%{id}' was not found": [
        "Template com id '%{id}' não foi localizado"
      ],
      "Feature input %{input_name} not defined in template %{template_name}": [
        "Recurso de entrada %{input_name} não definido no modelo %{template_name}"
      ],
      "No template mapped to feature %{feature_name}": [
        "Nenhum template mapeado para o recurso %{feature_name}"
      ],
      "The template %{template_name} mapped to feature %{feature_name} is not accessible by the user": [
        "O modelo %{template_name} mapeado para o recurso %{feature_name} não é acessível pelo usuário"
      ],
      "Job Invocation": [
        "Invocação de Trabalho"
      ],
      "Duplicated inputs detected: %{duplicated_inputs}": [
        "Entradas duplicadas detectadas: %{duplicated_inputs}"
      ],
      "Unknown remote execution feature %s": [
        "Recurso de execução remota desconhecido %s"
      ],
      "Effective user method \\\"%{current_value}\\\" is not one of %{valid_methods}": [
        "O método de usuário efetivo \\\"%{current_value}\\\" não é de %{valid_methods}"
      ],
      "Could not find any suitable interface for execution": [
        "Não foi possível encontrar uma interface adequada para execução"
      ],
      "Subscribe to my failed jobs": [
        "Subscrever meus empregos falhados"
      ],
      "Subscribe to my succeeded jobs": [
        "Subscrever meus trabalhos bem-sucedidos"
      ],
      "Subscribe to all my jobs": [
        "Inscrever-me em todos os meus empregos"
      ],
      "Script": [
        "Roteiro"
      ],
      "Static Query": [
        "Consulta Estática "
      ],
      "Dynamic Query": [
        "Consulta Dinâmica"
      ],
      "Alphabetical": [
        "Alfabético"
      ],
      "Randomized": [
        "Aleatório"
      ],
      "Cannot resolve hosts without a user": [
        "Não é possível resolver os hosts sem um usuário"
      ],
      "Cannot resolve hosts without a bookmark or search query": [
        "Não é possível resolver os hosts sem uma marcação ou consulta de pesquisa "
      ],
      "Must select a bookmark or enter a search query": [
        "É preciso selecionar uma marcação ou inserir uma consulta de pesquisa"
      ],
      "Input": [
        "Entrada"
      ],
      "Not all required inputs have values. Missing inputs: %s": [
        "Nem todas as entradas necessárias possuem valores. Entradas ausentes: %s"
      ],
      "Internal proxy selector can only be used if Katello is enabled": [
        "O seletor de proxy interno só pode ser usado se o Katello estiver habilitado"
      ],
      "default_capsule method missing from SmartProxy": [
        "método_capsule padrão faltando no SmartProxy"
      ],
      "Can't find Job Invocation for an id %s": [
        "Não consigo encontrar um emprego para uma identificação %s"
      ],
      "Latest Jobs": [
        "Últimos empregos"
      ],
      "Name": [
        "Nome"
      ],
      "State": [
        "Estado"
      ],
      "Started": [
        "Iniciado em"
      ],
      "No jobs available": [
        "Não há empregos disponíveis"
      ],
      "Results": [
        "Resultados"
      ],
      "Schedule": [
        "Agendamento"
      ],
      "Concurrency level limited to": [
        "Nível de simultaneidade limitado a"
      ],
      "tasks at a time": [
        "tarefas a cada vez"
      ],
      "Scheduled to start before": [
        "Agendado para iniciar antes"
      ],
      "Scheduled to start at": [
        "Agendado para iniciar em"
      ],
      "Timeout to kill after": [
        "Tempo limite para encerrar após"
      ],
      "seconds": [
        "segundos"
      ],
      "Time to pickup": [
        ""
      ],
      "Target hosts": [
        "Hosts de destino"
      ],
      "Bookmark": [
        "Marcador"
      ],
      "Manual selection": [
        "Seleção manual"
      ],
      "using ": [
        "usando "
      ],
      "Execution order": [
        "Ordem de execução"
      ],
      "Organization": [
        "Organização"
      ],
      "Location": [
        "Local"
      ],
      "SSH User": [
        "Usuário SSH"
      ],
      "Evaluated at:": [
        "Avaliado(a) em:"
      ],
      "User Inputs": [
        "Entradas de usuário"
      ],
      "Description": [
        "Descrição"
      ],
      "Job template": [
        "Modelo de trabalho"
      ],
      "Resolves to": [
        "Resolve para"
      ],
      "hosts": [
        "hosts"
      ],
      "Refresh": [
        "Atualizar"
      ],
      "Preview": [
        "Visualização"
      ],
      "Display advanced fields": [
        "Exibir campos avançados"
      ],
      "Hide advanced fields": [
        "Ocultar campos avançados"
      ],
      "SSH user": [
        ""
      ],
      "A user to be used for SSH.": [
        ""
      ],
      "Effective user": [
        "Usuário efetivo"
      ],
      "A user to be used for executing the script. If it differs from the SSH user, su or sudo is used to switch the accounts.": [
        "Usuário a ser usado para a execução de script. Se ele for diferente do usuário SSH, su ou sudo pode ser utilizado para a troca de contas. "
      ],
      "Timeout to kill": [
        "Tempo limite para encerrar"
      ],
      "Time in seconds from the start on the remote host after which the job should be killed.": [
        "Tempo em segundos do início no host remoto após o qual o trabalho deve ser encerrado."
      ],
      "Interval in seconds, if the job is not picked up by a client within this interval it will be cancelled.": [
        ""
      ],
      "Password": [
        "Senha"
      ],
      "Password is stored encrypted in DB until the job finishes. For future or recurring executions, it is removed after the last execution.": [
        "A senha é armazenada criptografada no banco de dados até que o trabalho seja concluído. Para execuções futuras ou recorrentes, ela é removida após a última execução."
      ],
      "Private key passphrase": [
        "Senha da chave privada"
      ],
      "Key passhprase is only applicable for SSH provider. Other providers ignore this field. <br> Passphrase is stored encrypted in DB until the job finishes. For future or recurring executions, it is removed after the last execution.": [
        "A senha da chave só é aplicável ao fornecedor SSH. Outros fornecedores ignoram esse campo. <br> A senha é armazenada criptografada no banco de dados até que o trabalho seja concluído. Para execuções futuras ou recorrentes, ela é removida após a última execução."
      ],
      "Effective user password": [
        "Senha efetiva do usuário"
      ],
      "Effective user password is only applicable for SSH provider. Other providers ignore this field. <br> Password is stored encrypted in DB until the job finishes. For future or recurring executions, it is removed after the last execution.": [
        "A senha efetiva do usuário só é aplicável para o provedor SSH. Outros provedores ignoram este campo. <br> A senha é armazenada criptografada no DB até que o trabalho termine. Para execuções futuras ou recorrentes, ela é removida após a última execução."
      ],
      "Concurrency level": [
        "Nível de simultaneidade"
      ],
      "Run at most N tasks at a time. If this is set and proxy batch triggering is enabled, then tasks are triggered on the smart proxy in batches of size 1.": [
        "Executar no máximo N tarefas de cada vez. Se essa opção estiver definida, e o acionamento em lote de proxy estiver desabilitado, então, as tarefas serão acionadas no proxy inteligente em lotes de tamanho 1."
      ],
      "Execution ordering": [
        "Ordenação da execução"
      ],
      "Execution ordering determines whether the jobs should be executed on hosts in alphabetical order or in randomized order.<br><ul><li><b>Ordered</b> - executes the jobs on hosts in alphabetical order</li><li><b>Randomized</b> - randomizes the order in which jobs are executed on hosts</li></ul>": [
        "A ordenação da execução determina se os trabalhos devem ser executados em hosts em ordem alfabética ou em ordem aleatória.<br><ul><li><b>Ordenado</b> - executa os trabalhos em hosts em ordem alfabética</li><li><b>Aleatória</b> - torna aleatória a ordem em que os trabalhos são executados em hosts</li></ul>"
      ],
      "Type of query": [
        "Tipo de consulta"
      ],
      "Type has impact on when is the query evaluated to hosts.<br><ul><li><b>Static</b> - evaluates just after you submit this form</li><li><b>Dynamic</b> - evaluates just before the execution is started, so if it's planned in future, targeted hosts set may change before it</li></ul>": [
        ""
      ],
      "The final host list may change because the selected query is dynamic.  It will be rerun during execution.": [
        "A lista final de hosts pode mudar, pois a consulta selecionada é dinâmica. Ela será executada novamente durante a execução. "
      ],
      "...and %{count} more": [
        "",
        ""
      ],
      "No hosts found.": [
        "Nenhum host localizado."
      ],
      "Close": [
        "Fechar"
      ],
      "Current organization %{org_c} is different from job's organization %{org_j}.": [
        "A organização atual %{org_c} é diferente da organização do trabalho %{org_j}."
      ],
      "Current location %{loc_c} is different from job's location %{loc_j}.": [
        "O local atual %{loc_c} é diferente do local do trabalho %{loc_j}."
      ],
      "The dynamic query '%{query}' was not resolved yet. The list of hosts to which it would resolve now can be seen %{here}.": [
        "A consulta dinâmica '%{query}' não foi resolvida ainda. A lista dos hosts de que ela poderia ser resolvida agora pode ser visualizada %{here}."
      ],
      "here": [
        "aqui"
      ],
      "effective user": [
        "usuário efetivo"
      ],
      "Total hosts": [
        "Número total de hosts"
      ],
      "Hosts gone missing": [
        "Anfitriões que desapareceram"
      ],
      "This can happen if the host is removed or moved to another organization or location after the job was started": [
        "Isso pode acontecer se o anfitrião for removido ou transferido para outra organização ou local após o início do trabalho"
      ],
      "Providers and templates": [
        "Provedores e modelos"
      ],
      "User input": [
        "Entrada do usuário"
      ],
      "Value": [
        "Valor"
      ],
      "Search Query": [
        "Consulta de pesquisa"
      ],
      "Status": [
        "Estado"
      ],
      "Succeeded": [
        "Êxito"
      ],
      "Start": [
        "Iniciar"
      ],
      "Job invocation": [
        "Invocação de trabalho"
      ],
      "Use new job wizard": [
        ""
      ],
      "Overview": [
        "Visão Geral"
      ],
      "Preview templates": [
        "Modelos de visualização"
      ],
      "Recurring logic": [
        "Lógica recorrente"
      ],
      "Job Invocations": [
        "Invocações de trabalho"
      ],
      "Foreman can run arbitrary commands on remote hosts using different providers, such as SSH or Ansible. Communication goes through the Smart Proxy so Foreman does not have to have direct access to the target hosts and can scale to control many hosts.": [
        "O Foreman pode executar comandos arbitrários em hosts remotos usando diferentes provedores, como SSH ou Ansible. A comunicação é feita através do Proxy Inteligente, portanto, o Foreman não precisa ter acesso direto aos hosts e pode escalar para controlar muitos hosts."
      ],
      "Learn more about this in the documentation.": [
        "Para saber mais sobre isto, acesse a documentação."
      ],
      "Job": [
        "Trabalho"
      ],
      "Type": [
        "Tipo"
      ],
      "Add Foreign Input Set": [
        "Adicionar Conjunto de Entradas Externas"
      ],
      "add an input set for this template to reference a different template inputs": [
        "adicionar um conjunto de entradas para este modelo para referenciar entradas de modelo diferentes "
      ],
      "Snippet": [
        "Snippet"
      ],
      "Select an ERB file to upload in order to import a job template.  The template must contain metadata in the first ERB comment.": [
        "Selecione um arquivo ERB para ser carregado para importar um modelo de trabalho. O modelo deve conter os metadados no primeiro comentário do ERB. "
      ],
      "Overwrite": [
        "Substituir"
      ],
      "Whether to overwrite the template if it already exists": [
        "Deve-se ou não sobrescrever o modelo, caso ele já exista "
      ],
      "Job Templates": [
        "Modelos de Trabalho"
      ],
      "Edit %s": [
        "Editar %s"
      ],
      "Edit Job Template": [
        "Editar Modelo de Trabalho"
      ],
      "Import": [
        "Importar"
      ],
      "New Job Template": [
        "Novo Modelo de Trabalho "
      ],
      "JobTemplate|Name": [
        "JobTemplate|Nome"
      ],
      "JobTemplate|Snippet": [
        "JobTemplate|Snippet"
      ],
      "JobTemplate|Locked": [
        "JobTemplate|Bloqueado"
      ],
      "Actions": [
        "Ações"
      ],
      "This template is locked for editing.": [
        "Este mdelo está travado para edição."
      ],
      "The execution interface is used for remote execution": [
        "A interface de execução é usada para a execução remota "
      ],
      "Remote execution": [
        "Execução remota"
      ],
      "Remote Execution": [
        "Execução Remota"
      ],
      "Proxies": [
        "Proxies"
      ],
      "Select as many remote execution proxies as applicable for this subnet.  When multiple proxies with the same provider are added, actions will be load balanced among them.": [
        "Selecione o máximo possível de proxies de execução remota aplicável a esta subrede. Quando os diversos proxies com o mesmo provedor forem adicionados, as ações obterão balanceamento de carga entre elas. "
      ],
      "You are not allowed to see the currently assigned template. Saving the form now would unassign the template.": [
        "Você não tem permissão para visualizar o modelo atualmente atribuído. Salvar o formulário agora cancelaria a atribuição do modelo. "
      ],
      "Remote Execution Features": [
        "Recursos de Execução Remota "
      ],
      "Label": [
        "Rótulo"
      ],
      "Edit Remote Execution Feature": [
        "Editar Recursos de Execução Remota "
      ],
      "A job '%{job_name}' has %{status} at %{time}": [
        "Um emprego '%{job_name}' tem %{status} em %{time}"
      ],
      "Job result": [
        "Resultado do trabalho"
      ],
      "Failed hosts": [
        "Anfitriões fracassados"
      ],
      "See more details at %s": [
        "Veja mais detalhes em %s"
      ],
      "Foreign input set": [
        "Conjunto de entradas externas"
      ],
      "remove template input set": [
        "remover conjunto de entrada de modelo"
      ],
      "A comma separated list of input names to be excluded from the foreign template.": [
        "Uma lista separada por vírgula dos nomes de entradas a serem executados do template externo. "
      ],
      "Template Invocation for %s": [
        "Invocação do modelo para %s"
      ],
      "Back to Job": [
        "Voltar ao Trabalho "
      ],
      "Toggle command": [
        "Comando toggle "
      ],
      "Toggle STDERR": [
        "Toggle STDERR"
      ],
      "Toggle STDOUT": [
        "Toggle STDOUT"
      ],
      "Toggle DEBUG": [
        "Toggle DEBUG"
      ],
      "Target: ": [
        "Destino:"
      ],
      "using Smart Proxy": [
        "usando o Smart Proxy"
      ],
      "Scroll to bottom": [
        "Rolar até a parte inferior"
      ],
      "Scroll to top": [
        "Rolar até a parte superior"
      ],
      "Could not display data for job invocation.": [
        "Não foi possível exibir dados para a invocação de empregos."
      ],
      "Unsupported or no operating system found for this host.": [
        "Sistema operacional sem suporte ou não localizado para este host. "
      ],
      "A job '%{subject}' has finished successfully": [
        "Um trabalho '%{subject}' foi concluído com êxito"
      ],
      "Job Details": [
        "Detalhes do trabalho"
      ],
      "A job '%{subject}' has failed": [
        "Um trabalho '%{subject}' falhou"
      ],
      "Remote execution job": [
        "Trabalho de execução remota"
      ],
      "A notification when a job finishes": [
        "Uma notificação quando um trabalho termina"
      ],
      "Unable to create mail notification: %s": [
        "Incapaz de criar notificação por correio: %s"
      ],
      "Search the host for any proxy with Remote Execution, useful when the host has no subnet or the subnet does not have an execution proxy": [
        "Pesquise o host por quaisquer proxies com execução remota, útil quando o host não possui subrede ou a subrede não tem um proxy de execução "
      ],
      "Fallback to Any Proxy": [
        "Executar fallback em qualquer proxy"
      ],
      "Search for remote execution proxy outside of the proxies assigned to the host. The search will be limited to the host's organization and location.": [
        "Pesquise por proxies de execução remota fora dos proxies atribuídos ao host. A pesquisa ficará limitada à organização ou localização do host."
      ],
      "Enable Global Proxy": [
        "Ativar o proxy global"
      ],
      "Default user to use for SSH.  You may override per host by setting a parameter called remote_execution_ssh_user.": [
        "Usuário padrão a ser usado para SSH. Você pode substituir por host configurando um parâmetro chamado remote_execution_ssh_user."
      ],
      "Default user to use for executing the script. If the user differs from the SSH user, su or sudo is used to switch the user.": [
        "Usuário padrão a ser usado para a execução de script. Se ele for diferente do usuário SSH, su ou sudo pode ser utilizado para trocar de usuário. "
      ],
      "Effective User": [
        "Usuário efetivo"
      ],
      "What command should be used to switch to the effective user. One of %s": [
        "O comando que deve ser usado para trocar para o usuário efetivo. Um dos %s"
      ],
      "Effective User Method": [
        "Método de usuário efetivo"
      ],
      "Whether we should sync templates from disk when running db:seed.": [
        "Se os modelos devem ser sincronizados a partir do disco ou não, quando executando db:seed."
      ],
      "Sync Job Templates": [
        "Sincronizar modelos de trabalho"
      ],
      "Port to use for SSH communication. Default port 22. You may override per host by setting a parameter called remote_execution_ssh_port.": [
        "Porta a ser usada para comunicação SSH. Porta padrão 22. Você pode substituir por host configurando um parâmetro chamado remote_execution_ssh_port."
      ],
      "SSH Port": [
        "Porta SSH"
      ],
      "Should the ip addresses on host interfaces be preferred over the fqdn? It is useful when DNS not resolving the fqdns properly. You may override this per host by setting a parameter called remote_execution_connect_by_ip. For dual-stacked hosts you should consider the remote_execution_connect_by_ip_prefer_ipv6 setting": [
        "Os endereços ip nas interfaces do host devem ser preferidos em vez do fqdn? É útil quando o DNS não resolve os fqdns corretamente. Você pode sobrepor isto por host definindo um parâmetro chamado remote_execution_connect_by_ip. Para hosts com duplo empilhamento, você deve considerar a configuração remote_execution_connect_by_ip_prefer_ipv6."
      ],
      "Connect by IP": [
        "Conectar por IP"
      ],
      "When connecting using ip address, should the IPv6 addresses be preferred? If no IPv6 address is set, it falls back to IPv4 automatically. You may override this per host by setting a parameter called remote_execution_connect_by_ip_prefer_ipv6. By default and for compatibility, IPv4 will be preferred over IPv6 by default": [
        "Ao conectar usando endereço ip, os endereços IPv6 devem ser preferidos? Se nenhum endereço IPv6 for definido, ele volta automaticamente para IPv4. Você pode sobrepor isso por host definindo um parâmetro chamado remote_execution_connect_by_ip_prefer_ipv6. Por padrão e por compatibilidade, o IPv4 será preferido ao IPv6 por padrão."
      ],
      "Prefer IPv6 over IPv4": [
        "Prefere IPv6 sobre IPv4"
      ],
      "Default password to use for SSH. You may override per host by setting a parameter called remote_execution_ssh_password": [
        "A senha padrão a ser usada para SSH. Você pode substituir por host configurando um parâmetro chamado remote_execution_ssh_password."
      ],
      "Default SSH password": [
        "Senha SSH padrão"
      ],
      "Default key passphrase to use for SSH. You may override per host by setting a parameter called remote_execution_ssh_key_passphrase": [
        "Senha da chave padrão a ser usada para SSH. Você pode substituir por host configurando um parâmetro chamado remote_execution_ssh_key_passphrase."
      ],
      "Default SSH key passphrase": [
        "Senha da chave SSH padrão"
      ],
      "Amount of workers in the pool to handle the execution of the remote execution jobs. Restart of the dynflowd/foreman-tasks service is required.": [
        "Quantidade de trabalhadores no pool para lidar com a execução das tarefas de execução remota. É preciso reiniciar o serviço dynflowd/foreman-tasks."
      ],
      "Workers pool size": [
        "Tamanho do pool dos trabalhadores"
      ],
      "When enabled, working directories will be removed after task completion. You may override this per host by setting a parameter called remote_execution_cleanup_working_dirs.": [
        "Quando habilitado, os diretórios de trabalho serão removidos após a conclusão da tarefa. Você pode substituir por host configurando um parâmetro chamado remote_execution_cleanup_working_dirs."
      ],
      "Cleanup working directories": [
        "Limpeza dos diretórios de trabalho"
      ],
      "Where to find the Cockpit instance for the Web Console button.  By default, no button is shown.": [
        "Onde encontrar a instância de Cockpit para o botão Console da web. Por padrão, nenhum botão é mostrado."
      ],
      "Cockpit URL": [
        "URL de cockpit"
      ],
      "Choose a job template that is pre-selected in job invocation form": [
        "Escolha um template de trabalho pré-selecionado no formulário de invocação de trabalho"
      ],
      "Form Job Template": [
        "Formar template de trabalho"
      ],
      "Select a report template used for generating a report for a particular remote execution job": [
        "Selecione um modelo de relatório utilizado para gerar um relatório para um determinado trabalho de execução remota"
      ],
      "Job Invocation Report Template": [
        "Modelo de Relatório de Invocação de Emprego"
      ],
      "Time in seconds within which the host has to pick up a job. If the job is not picked up within this limit, the job will be cancelled. Defaults to 1 day. Applies only to pull-mqtt based jobs.": [
        ""
      ],
      "Job templates": [
        "Modelos de trabalho"
      ],
      "Job invocations detail": [
        ""
      ],
      "Run Puppet Once": [
        "Executar Puppet"
      ],
      "Perform a single Puppet run": [
        "Realizar uma única execução de Puppet"
      ],
      "Run Script": [
        ""
      ],
      "Run a script": [
        ""
      ],
      "Not yet": [
        ""
      ],
      "Effective user:": [
        ""
      ],
      "Started at:": [
        ""
      ],
      "SSH user:": [
        ""
      ],
      "Template:": [
        ""
      ],
      "Submit": [
        ""
      ],
      "Next": [
        ""
      ],
      "Back": [
        ""
      ],
      "Start job": [
        ""
      ],
      "Fill all required fields in all the steps": [
        ""
      ],
      "Run on selected hosts": [
        ""
      ],
      "Skip to review step": [
        ""
      ],
      "Fill all required fields in all the steps to start the job": [
        ""
      ],
      "Skip to review": [
        ""
      ],
      "Cancel": [
        ""
      ],
      "Does not repeat": [
        "Não se repete"
      ],
      "Cronline": [
        "Cronline"
      ],
      "Monthly": [
        "Mensal"
      ],
      "Weekly": [
        "Semanal"
      ],
      "Daily": [
        "Diário"
      ],
      "Hourly": [
        "De hora em hora"
      ],
      "Immediate execution": [
        ""
      ],
      "Future execution": [
        ""
      ],
      "Recurring execution": [
        ""
      ],
      "Category and template": [
        ""
      ],
      "Target hosts and inputs": [
        "Anfitriões e insumos alvo"
      ],
      "Advanced fields": [
        "Campos avançados"
      ],
      "Review details": [
        "Detalhes da revisão"
      ],
      "Type of execution": [
        ""
      ],
      "Hosts": [
        "Hosts"
      ],
      "Host collections": [
        "Coleções de anfitriões"
      ],
      "Host groups": [
        "Grupos de host"
      ],
      "Search query": [
        "Consulta de pesquisa"
      ],
      "Run job": [
        "Executar trabalho"
      ],
      "Use old form": [
        ""
      ],
      "Current organization %s is different from job's organization %s. This job may run on different hosts than before.": [
        ""
      ],
      "Current location %s is different from job's location %s. This job may run on different hosts than before.": [
        ""
      ],
      "'Starts before' date must in the future": [
        ""
      ],
      "Please go back to \\\\\\\"Schedule\\\\\\\" - \\\\\\\"Future execution\\\\\\\" step to fix the error": [
        ""
      ],
      "Use legacy form": [
        ""
      ],
      "Edit job description template": [
        "Editar modelo de descrição de cargo"
      ],
      "Preview job description": [
        "Prever descrição do trabalho"
      ],
      "For example: 1, 2, 3, 4, 5...": [
        "Por exemplo: 1, 2, 3, 4, 5..."
      ],
      "Interval in seconds, if the job is not picked up by a client within this interval it will be cancelled. Applies only to pull-mqtt based jobs": [
        ""
      ],
      "Key passphrase is only applicable for SSH provider. Other providers ignore this field. Passphrase is stored encrypted in DB until the job finishes. For future or recurring executions, it is removed after the last execution.": [
        "A frase-chave só é aplicável ao fornecedor de SSH. Outros provedores ignoram este campo. A frase-chave é armazenada criptografada no DB até o término do trabalho. Para execuções futuras ou recorrentes, ela é removida após a última execução."
      ],
      "Effective user password is only applicable for SSH provider. Other providers ignore this field. Password is stored encrypted in DB until the job finishes. For future or recurring executions, it is removed after the last execution.": [
        "A senha efetiva do usuário só é aplicável para o provedor SSH. Outros provedores ignoram este campo. A senha é armazenada criptografada no DB até que o trabalho termine. Para execuções futuras ou recorrentes, ela é removida após a última execução."
      ],
      "All fields are required.": [
        "Todos os campos são obrigatórios."
      ],
      "Error": [
        "Erro"
      ],
      "Errors:": [
        "Erros:"
      ],
      "Categories list failed with:": [
        "A lista de categorias falhou:"
      ],
      "Templates list failed with:": [
        "A lista de gabaritos falhou:"
      ],
      "Template failed with:": [
        "O modelo falhou com:"
      ],
      "Preview Hosts": [
        "Pré-visualização dos anfitriões"
      ],
      "...and %s more": [
        "...e %s mais"
      ],
      "%s more": [
        ""
      ],
      "Clear all filters": [
        ""
      ],
      "There are no available input fields for the selected template.": [
        "Não há campos de entrada disponíveis para o modelo selecionado."
      ],
      "Please select at least one host": [
        ""
      ],
      "Please enter a search query": [
        ""
      ],
      "Please select at least one host collection": [
        ""
      ],
      "Please select at least one host group": [
        ""
      ],
      "Filter by hosts": [
        "Filtrar por anfitriões"
      ],
      "Filter by host collections": [
        "Filtrar por coleções do hospedeiro"
      ],
      "Filter by host groups": [
        "Filtrar por grupos anfitriões"
      ],
      "Apply to": [
        "Aplicar para"
      ],
      "Never": [
        "Nunca"
      ],
      "After %s occurences": [
        ""
      ],
      "Every hour at minute %s": [
        ""
      ],
      "Every day at %s": [
        ""
      ],
      "Every week on %s at %s": [
        ""
      ],
      "Every month on %s at %s": [
        ""
      ],
      "Cron line": [
        "Cron line"
      ],
      "No Target Hosts": [
        "Sem anfitriões alvo"
      ],
      "view host names": [
        ""
      ],
      "Hide all advanced fields": [
        "Ocultar todos os campos avançados"
      ],
      "Show all advanced fields": [
        "Mostrar todos os campos avançados"
      ],
      "Schedule type": [
        "Tipo de horário"
      ],
      "Recurrence": [
        "Recorrência"
      ],
      "Starts at": [
        "Começa em"
      ],
      "Starts Before": [
        ""
      ],
      "Starts": [
        "Inicia"
      ],
      "Now": [
        ""
      ],
      "Repeats": [
        "Repetições "
      ],
      "Ends": [
        "Finais"
      ],
      "Purpose": [
        "Objetivo"
      ],
      "Static query": [
        "Consulta estática"
      ],
      "Dynamic query": [
        "Consulta dinâmica"
      ],
      "Description Template": [
        "Descrição Modelo"
      ],
      "A special label for tracking a recurring job. There can be only one active job with a given purpose at a time.": [
        "Uma etiqueta especial para rastrear um trabalho recorrente. Só pode haver um trabalho ativo com um determinado objetivo de cada vez."
      ],
      "Query type": [
        "Tipo de consulta"
      ],
      "Type has impact on when is the query evaluated to hosts.": [
        "O tipo tem impacto sobre quando a consulta é avaliada para os anfitriões."
      ],
      "evaluates just after you submit this form": [
        "avalia logo após o envio deste formulário"
      ],
      "evaluates just before the execution is started, so if it's planned in future, targeted hosts set may change before it": [
        ""
      ],
      "Cron line (extended)": [
        ""
      ],
      "Cron line format '1 2 3 4 5', where:": [
        ""
      ],
      "is minute (range: 0-59)": [
        "é o minuto (intervalo: 0-59) "
      ],
      "is hour (range: 0-23)": [
        "é a hora (intervalo: 0-23)"
      ],
      "is day of month (range: 1-31)": [
        "é o dia do mês (intervalo: 1-31)"
      ],
      "is month (range: 1-12)": [
        "é o mês (intervalo: 1-12)"
      ],
      "is day of week (range: 0-6)": [
        "é o dia da semana (intervalo: 0-6)"
      ],
      "The cron line supports extended cron line syntax. For details please refer to the ": [
        ""
      ],
      "documentation": [
        ""
      ],
      "At": [
        "No(a)"
      ],
      "Invalid time format": [
        "Formato de tempo inválido"
      ],
      "At minute": [
        "Em minuto"
      ],
      "range: 0-59": [
        ""
      ],
      "Create": [
        "Criar"
      ],
      "Minute can only be a number between 0-59": [
        ""
      ],
      "Days": [
        "Dias"
      ],
      "Days of week": [
        "Dias da semana"
      ],
      "For Future execution a 'Starts at' date or 'Starts before' date must be selected. Immediate execution can be selected in the previous step.": [
        ""
      ],
      "'Starts before' date must be after 'Starts at' date": [
        ""
      ],
      "Clear input": [
        ""
      ],
      "Starts before": [
        "Começa antes de"
      ],
      "End time needs to be after start time": [
        "O tempo final precisa ser após a hora de início"
      ],
      "On": [
        "Ligado"
      ],
      "After": [
        ""
      ],
      "Repeat amount can only be a positive number": [
        "A quantia repetida só pode ser um número positivo"
      ],
      "occurences": [
        ""
      ],
      "Select the type of execution": [
        ""
      ],
      "Execute the job now.": [
        ""
      ],
      "Execute the job later, at a scheduled time.": [
        ""
      ],
      "Execute the job on a repeating schedule.": [
        ""
      ],
      "Invalid date": [
        "Data inválida"
      ],
      "open-help-tooltip-button": [
        "open-help-tooltip-button"
      ],
      "Reset to default": [
        "Reconfigurar como padrão"
      ],
      "Has to be a positive number": [
        "Tem que ser um número positivo"
      ],
      "Please refine your search.": [
        "Por favor, refine sua busca."
      ],
      "You have %s results to display. Showing first %s results": [
        "Você tem %s resultados para exibir. Mostrando primeiro %s resultados"
      ],
      "Opening job invocation form": [
        ""
      ],
      "%s job has been invoked": [
        "%s trabalho foi invocado"
      ],
      "Schedule a job": [
        "Programar um trabalho"
      ],
      "Recent jobs": [
        "Trabalhos recentes"
      ],
      "View all jobs": [
        "Ver todos os trabalhos"
      ],
      "View finished jobs": [
        "Ver trabalhos terminados"
      ],
      "View running jobs": [
        "Ver trabalhos em andamento"
      ],
      "View scheduled jobs": [
        "Ver empregos programados"
      ],
      "Finished": [
        "Concluído"
      ],
      "Running": [
        "Executando"
      ],
      "Scheduled": [
        "Agendado"
      ],
      "No results found": [
        "Nenhum resultado encontrado"
      ],
      "Remote Execution Interface": [
        "Interface de execução remota"
      ],
      "yes": [
        "sim"
      ],
      "no": [
        "não"
      ],
      "Inherit from host parameter": [
        ""
      ],
      "Yes (override)": [
        ""
      ],
      "No (override)": [
        ""
      ],
      "REX pull mode": [
        ""
      ],
      "Setup remote execution pull mode. If set to `Yes`, pull provider client will be deployed on the registered host. The inherited value is based on the `host_registration_remote_execution_pull` parameter. It can be inherited e.g. from host group, operating system, organization. When overridden, the selected value will be stored on host parameter level.": [
        ""
      ],
      "Host": [
        "Máquina"
      ],
      "Active Filters:": [
        ""
      ],
      "A plugin bringing remote execution to the Foreman, completing the config management functionality with remote management functionality.": [
        "Um plugin trazendo execução remota ao Foreman, completando a funcionalidade de gerenciamento de configuração com a funcionalidade de gerenciamento remoto. "
      ],
      "Action with sub plans": [
        "Ação com subplanos "
      ],
      "Import Puppet classes": [
        "Importar classes de Puppet"
      ],
      "Import facts": [
        "Importar fatos"
      ]
    }
  }
};