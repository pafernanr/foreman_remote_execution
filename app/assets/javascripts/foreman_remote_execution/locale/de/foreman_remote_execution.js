 locales['foreman_remote_execution'] = locales['foreman_remote_execution'] || {}; locales['foreman_remote_execution']['de'] = {
  "domain": "foreman_remote_execution",
  "locale_data": {
    "foreman_remote_execution": {
      "": {
        "Project-Id-Version": "foreman_remote_execution 9.0.1",
        "Report-Msgid-Bugs-To": "",
        "PO-Revision-Date": "2016-02-15 13:54+0000",
        "Last-Translator": "Ettore Atalan <atalanttore@googlemail.com>, 2016-2017,2022",
        "Language-Team": "German (http://www.transifex.com/foreman/foreman/language/de/)",
        "MIME-Version": "1.0",
        "Content-Type": "text/plain; charset=UTF-8",
        "Content-Transfer-Encoding": "8bit",
        "Language": "de",
        "Plural-Forms": "nplurals=2; plural=(n != 1);",
        "lang": "de",
        "domain": "foreman_remote_execution",
        "plural_forms": "nplurals=2; plural=(n != 1);"
      },
      "Another interface is already set as execution. Are you sure you want to use this one instead?": [
        "Es ist bereits eine andere Schnittstelle für die Ausführung bestimmt. Sind Sie sicher, dass Sie stattdessen diese Schnittstelle verwenden möchten?"
      ],
      "There was an error while updating the status, try refreshing the page.": [
        "Beim Status-Update ist ein Fehler aufgetreten, versuchen Sie die Seite zu aktualisieren."
      ],
      "List foreign input sets": [
        "Fremdeingabe-Sätze auflisten"
      ],
      "Show foreign input set details": [
        " Details zu Fremdeingabe-Satz anzeigen"
      ],
      "Target template ID": [
        "Zielvorlage-ID"
      ],
      "Include all inputs from the foreign template": [
        "Alle Eingaben aus Fremdvorlage einschließen"
      ],
      "A comma separated list of input names to be included from the foreign template.": [
        "Kommagetrennte Liste von Eingabenamen, die in die Fremdvorlage einzubeziehen ist"
      ],
      "Input set description": [
        "Beschreibung des Eingabe-Satzes"
      ],
      "Create a foreign input set": [
        "Fremdeingabe-Satz erstellen"
      ],
      "Delete a foreign input set": [
        "Fremdeingabe-Satz löschen"
      ],
      "Update a foreign input set": [
        "Fremdeingabe-Satz aktualisieren"
      ],
      "List job invocations": [
        "Job-Aufrufe auflisten"
      ],
      "Show job invocation": [
        "Job-Aufrufe anzeigen"
      ],
      "Show Job status for the hosts": [
        "Zeige Job status des Hosts"
      ],
      "The job template to use, parameter is required unless feature was specified": [
        "Das Job-Template zum Benutzen, der Parameter wird benötigt ausser das Feature wurde spezifiziert"
      ],
      "Invocation type, one of %s": [
        "Jobtyp, einer von %s"
      ],
      "Execute the jobs on hosts in randomized order": [
        "Führe die Jobs auf Hosts in randomisierter Reihenfolge aus"
      ],
      "Inputs to use": [
        "Zu verwendende Eingaben"
      ],
      "SSH provider specific options": [
        "Besondere Optionen des SSH-Anbieters"
      ],
      "What user should be used to run the script (using sudo-like mechanisms). Defaults to a template parameter or global setting.": [
        "Welcher Benutzer zur Ausführung des Skripts (mittels sudo-ähnlichen Mechanismen) verwendet werden soll. Standardmäßig wird ein Vorlagenparameter oder eine allgemeine Einstellung verwendet."
      ],
      "Set password for effective user (using sudo-like mechanisms)": [
        ""
      ],
      "Set SSH user": [
        ""
      ],
      "Set SSH password": [
        ""
      ],
      "Set SSH key passphrase": [
        ""
      ],
      "Create a recurring job": [
        "Wiederholten Job erstellen"
      ],
      "How often the job should occur, in the cron format": [
        "Wie oft der Job auftreten soll, in Cron-Format"
      ],
      "Repeat a maximum of N times": [
        "Maximal n-mal wiederholen"
      ],
      "Perform no more executions after this time": [
        "Danach nicht mehr ausführen"
      ],
      "Designation of a special purpose": [
        ""
      ],
      "Schedule the job to start at a later time": [
        "Job zu einer späteren Zeit starten lassen"
      ],
      "Schedule the job for a future time": [
        "Job zu einem zukünftigen Zeitpunkt starten lassen"
      ],
      "Indicates that the action should be cancelled if it cannot be started before this time.": [
        "Gibt an, dass die Aktion abgebrochen werden soll, wenn sie nicht vor diesem Zeitpunkt gestartet werden kann."
      ],
      "Control concurrency level and distribution over time": [
        "Parallelitätsebene und zeitliche Verteilung steuern"
      ],
      "Run at most N tasks at a time": [
        "Höchstens n Aufgaben gleichzeitig ausführen"
      ],
      "Override the description format from the template for this invocation only": [
        "Beschreibungsformat der Vorlage nur für diesen Aufruf außer Kraft setzen "
      ],
      "Override the timeout interval from the template for this invocation only": [
        "Überschreibe das Timeout-Intervall des Templates / Musters nur für diese Invokation / diesen Aufruf"
      ],
      "Remote execution feature label that should be triggered, job template assigned to this feature will be used": [
        "Label der Remote-Ausführungsfunktion, die ausgelöst werden soll, die dieser Funktion zugewiesene Jobvorlage wird verwendet"
      ],
      "Override the global time to pickup interval for this invocation only": [
        ""
      ],
      "Create a job invocation": [
        "Neuen Job-Aufruf erstellen"
      ],
      "Get output for a host": [
        "Ausgabe für einen Host abfragen"
      ],
      "Get raw output for a host": [
        "Besorge dir die rohen Outputs eines Hosts"
      ],
      "Cancel job invocation": [
        "Job-Aufruf abbrechen"
      ],
      "The job could not be cancelled.": [
        "Job kann nicht abgebrochen werden"
      ],
      "Rerun job on failed hosts": [
        "Erneut ausführen auf fehlgeschlagenen Hosts"
      ],
      "Could not rerun job %{id} because its template could not be found": [
        "Job %{id} konnte nicht erneut aufgerufen werden, da die Vorlage nicht gefunden wurde."
      ],
      "Get outputs of hosts in a job": [
        "Besorge dir die Outputs eines Hosts eines Jobs"
      ],
      "Host with id '%{id}' was not found": [
        "Host mit ID '%{id}' nicht gefunden"
      ],
      "Only one of feature or job_template_id can be specified": [
        ""
      ],
      "List job templates": [
        "Job-Vorlagen auflisten"
      ],
      "List job templates per location": [
        "Job-Vorlagen pro Standort auflisten"
      ],
      "List job templates per organization": [
        "Job-Vorlagen pro Organisation auflisten"
      ],
      "Import a job template from ERB": [
        "Job-Vorlage aus ERB importieren"
      ],
      "Template ERB": [
        "Vorlage ERB"
      ],
      "Overwrite template if it already exists": [
        "Vorlage überschreiben, falls bereits vorhanden"
      ],
      "Export a job template to ERB": [
        "Job-Vorlage nach ERB exportieren"
      ],
      "Show job template details": [
        "Details der Job-Vorlage anzeigen"
      ],
      "Template name": [
        "Vorlagenname"
      ],
      "Job category": [
        "Job-Kategorie"
      ],
      "This template is used to generate the description. Input values can be used using the syntax %{package}. You may also include the job category and template name using %{job_category} and %{template_name}.": [
        "Diese Vorlage wird für die Erstellung der Beschreibung verwendet. Eingabewerte können mittels Syntax %{package} verwendet werden. Sie können auch Job-Kategorie und Vorlagennamen über %{job_category} und %{template_name} einschließen."
      ],
      "Provider type": [
        "Providertyp"
      ],
      "Whether or not the template is locked for editing": [
        "Ob die Vorlage schreibgeschützt ist"
      ],
      "Effective user options": [
        "Effektive Benutzeroptionen"
      ],
      "What user should be used to run the script (using sudo-like mechanisms)": [
        "Welcher Benutzer zur Ausführung des Skripts verwendet werden soll (mittels sudo-ähnlichen Mechanismen)"
      ],
      "Whether it should be allowed to override the effective user from the invocation form.": [
        "Ob es möglich sein soll, den effektiven Benutzer des Aufruf-Formulars außer Kraft zu setzen."
      ],
      "Whether the current user login should be used as the effective user": [
        "Ob das aktuelle Login als effektiver Benutzer verwendet werden soll "
      ],
      "Create a job template": [
        "Job-Vorlage erstellen"
      ],
      "Update a job template": [
        "Job-Vorlage aktualisieren"
      ],
      "Template version": [
        "Vorlagenversion"
      ],
      "Delete a job template": [
        "Job-Vorlage löschen"
      ],
      "Clone a provision template": [
        "Bereitstellungsvorlage klonen"
      ],
      "List remote execution features": [
        "Entfernte Ausführungsfunktionen auflisten"
      ],
      "Show remote execution feature": [
        "Entfernte Ausführungsfunktionen anzeigen"
      ],
      "Job template ID to be used for the feature": [
        "Zukünftig zu verwendende ID der Job-Vorlage"
      ],
      "List available remote execution features for a host": [
        ""
      ],
      "List template invocations belonging to job invocation": [
        "Lasse dir die Template-Invocations ausgeben die zu einer Job-Invocation gehören"
      ],
      "Identifier of the Host interface for Remote execution": [
        "Identifizierer des Host-interfaces für Remote-Ausführung"
      ],
      "Set 'host_registration_remote_execution_pull' parameter for the host. If it is set to true, pull provider client will be deployed on the host": [
        ""
      ],
      "List of proxy IDs to be used for remote execution": [
        "Liste der Proxy-IDs die für Remote-Ausführung benutzt werden können."
      ],
      "Trying to abort the job": [
        "Versuche Jobabbruch zu erzwingen"
      ],
      "Trying to cancel the job": [
        "Versuche den Job abzubrechen"
      ],
      "The job cannot be aborted at the moment.": [
        "Die Aufgabe kann derzeit nicht abgebrochen werden."
      ],
      "The job cannot be cancelled at the moment.": [
        "Die Aufgabe kann derzeit nicht abgebrochen werden."
      ],
      "Problem with previewing the template: %{error}. Note that you must save template input changes before you try to preview it.": [
        "Problem bei Vorlagen-Vorschau: %{error}. Beachten Sie, dass Sie die Änderungen an der Vorlageneingabe speichern müssen, bevor eine Vorschau angezeigt werden kann."
      ],
      "Job template imported successfully.": [
        "Job-Vorlage erfolgreich importiert"
      ],
      "Unable to save template. Correct highlighted errors": [
        "Vorlage kann nicht gespeichert werden. Bitte korrigieren Sie die markierten Fehler"
      ],
      "Run": [
        "Ausführen"
      ],
      "Schedule Remote Job": [
        "Geplante Remote-Jobs"
      ],
      "Jobs": [
        "Jobs"
      ],
      "Job invocations": [
        "Job-Aufrufe "
      ],
      "%s": [
        "%s"
      ],
      "Web Console": [
        "Web-Konsole"
      ],
      "Success": [
        "Erfolg"
      ],
      "Failed": [
        "Fehlgeschlagen"
      ],
      "Pending": [
        "Ausstehend"
      ],
      "Cancelled": [
        "Abgebrochen"
      ],
      "queued to start executing in %{time}": [
        "in der Warteschlange, um in %{time} mit der Ausführung zu beginnen"
      ],
      "queued": [
        "in der Warteschlange"
      ],
      "running %{percent}%%": [
        "wird ausgeführt %{percent}%%"
      ],
      "succeeded": [
        "erfolgreich"
      ],
      "cancelled": [
        "abgebrochen"
      ],
      "failed": [
        "fehlgeschlagen"
      ],
      "unknown status": [
        "unbekannter Status"
      ],
      "Any Organization": [
        "Jede Organisation"
      ],
      "Any Location": [
        "Jeder Standort"
      ],
      "error": [
        "Error"
      ],
      "Host detail": [
        "Hostdetail"
      ],
      "Rerun on %s": [
        "Erneut ausführen auf %s"
      ],
      "Host task": [
        "Host-Aufgabe"
      ],
      "N/A": [
        "k.A."
      ],
      "Run Job": [
        "Job ausführen"
      ],
      "Create Report": [
        ""
      ],
      "Create report for this job": [
        ""
      ],
      "Rerun": [
        "Erneut ausführen"
      ],
      "Rerun the job": [
        "Job erneut ausführen"
      ],
      "Rerun failed": [
        "Erneutes Ausführen fehlgeschlagen"
      ],
      "Rerun on failed hosts": [
        "Erneut ausführen auf fehlgeschlagenen Hosts"
      ],
      "Job Task": [
        "Aufgaben des Jobs"
      ],
      "See the last task details": [
        "Ansicht der letzten Aufgabendetails"
      ],
      "Cancel Job": [
        "Job abbrechen"
      ],
      "Try to cancel the job": [
        "Versuche den Job abzubrechen"
      ],
      "Abort Job": [
        "Job abbrechen"
      ],
      "Try to abort the job without waiting for the results from the remote hosts": [
        "Versuche den Job abzubrechen ohne auf das Resultat vom entfernten Host zu warten"
      ],
      "New UI": [
        ""
      ],
      "Switch to the new job invocation detail UI": [
        ""
      ],
      "Task Details": [
        "Aufgabendetails"
      ],
      "See the task details": [
        "Ansicht der Aufgabendetails"
      ],
      "Try to cancel the job on a host": [
        "Versuche den Job auf einem Host abzubrechen"
      ],
      "Try to abort the job on a host without waiting for its result": [
        "Versuche den Job auf den Host abzubrechen ohne auf das Resultat zu warten"
      ],
      "Could not render the preview because no host matches the search query.": [
        "Vorschau konnte nicht gerendert werden, da kein Host, der Suchanfrage entspricht"
      ],
      "in %s": [
        "in %s"
      ],
      "%s ago": [
        "vor %s"
      ],
      "Use default description template": [
        "Standardbeschreibungsvorlage verwenden"
      ],
      "Description template": [
        "Beschreibungsvorlage"
      ],
      "This template is used to generate the description.<br/>Input values can be used using the syntax %{package}.<br/>You may also include the job category and template<br/>name using %{job_category} and %{template_name}.": [
        "Diese Vorlage wird für die Erstellung der Beschreibung verwendet. <br/>Eingabewerte können mittels Syntax %{package} verwendet werden.<br/> Sie können auch Job-Kategorie und Vorlagennamen <br/>über %{job_category} und %{template_name} einschließen."
      ],
      "Could not use any template used in the job invocation": [
        "Es konnte keine Vorlage aus dem Jobaufruf verwendet werden"
      ],
      "Failed rendering template: %s": [
        "Rendern der Vorlage fehlgeschlagen: %s"
      ],
      "Task cancelled": [
        "Task abgebrochen"
      ],
      "Job execution failed": [
        "Jobausführung fehlgeschlagen"
      ],
      "%{description} on %{host}": [
        "%{description} auf %{host}"
      ],
      "Remote action:": [
        "Entfernte Aktion"
      ],
      "Job cancelled by user": [
        "Jobabbruch durch Benutzer"
      ],
      "Exit status: %s": [
        "Exit-Status: %s"
      ],
      "Job finished with error": [
        "Job abgeschlossen mit Fehler"
      ],
      "Error loading data from proxy": [
        "Fehler die Daten vom Proxy zu laden."
      ],
      "User can not execute job on host %s": [
        "Benutzer kann den Job auf Host %s nicht ausführen"
      ],
      "User can not execute this job template": [
        "Benutzer kann diese Job-Vorlage nicht ausführen"
      ],
      "User can not execute job on infrastructure host %s": [
        ""
      ],
      "User can not execute this job template on %s": [
        "Benutzer kann diese Job-Vorlage nicht auf %s ausführen"
      ],
      "The only applicable proxy %{proxy_names} is down": [
        "Der einzige anwendbare Proxy %{proxy_names} ist ausgefallen",
        "Alle %{count} anwendbaren Proxys sind ausgefallen. %{proxy_names} ausprobiert"
      ],
      "Could not use any proxy for the %{provider} job. Consider configuring %{global_proxy}, %{fallback_proxy} in settings": [
        ""
      ],
      "REX job has succeeded - %s": [
        ""
      ],
      "REX job has failed - %s": [
        ""
      ],
      "included template '%s' not found": [
        "enthaltene Vorlage '%s' nicht gefunden"
      ],
      "input macro with name '%s' used, but no input with such name defined for this template": [
        "Es wurde ein Eingabe-Macro namens '%s' verwendet, aber es wurde keine Eingabe mit diesem Namen für diese Vorlage definiert"
      ],
      "Unable to fetch public key": [
        "Öffentlicher Schlüssel konnte nicht abgerufen werden"
      ],
      "Unable to remove host from known hosts": [
        "Host kann nicht von bekannten Hosts entfernt werden"
      ],
      "REX job has finished - %s": [
        ""
      ],
      "Should this interface be used for remote execution?": [
        "Soll diese Schnittstelle für die Remote-Ausführung verwendet werden?"
      ],
      "Interface with the '%s' identifier was specified as a remote execution interface, however the interface was not found on the host. If the interface exists, it needs to be created in Foreman during the registration.": [
        "Schnittstelle mit dem Bezeichner '%s wurde als Remote-Ausführungsschnittstelle angegeben, die Schnittstelle wurde jedoch nicht auf dem Host gefunden. Falls die Schnittstelle vorhanden ist, muss diese bei der Registrierung in Foreman angelegt werden."
      ],
      "host already has an execution interface": [
        "Host verfügt bereits über eine Ausführungsschnittstelle"
      ],
      "This template is locked. Please clone it to a new template to customize.": [
        "Diese Vorlage ist gesperrt. Bitte klonen Sie sie zum Bearbeiten in eine neue Vorlage."
      ],
      "Circular dependency detected in foreign input set '%{template}' -> '%{target_template}'. Templates stack: %{templates_stack}": [
        "Zirkuläre Abhängigkeit im Fremdeingabe-Satz gefunden '%{template}' -> '%{target_template}'. Vorlagen-Stack: %{templates_stack}"
      ],
      "Execution": [
        "Ausführung"
      ],
      "Last execution succeeded": [
        "Letzte Ausführung erfolgreich"
      ],
      "No execution finished yet": [
        "Noch keine Ausführung abgeschlossen"
      ],
      "Last execution cancelled": [
        "Letzte Ausführung abgebrochen"
      ],
      "Last execution failed": [
        "Letzte Ausführung fehlgeschlagen"
      ],
      "Unknown execution status": [
        "Unbekannter Ausführungsstatus"
      ],
      "Recursive rendering of templates detected": [
        "Rekursives Rendern von Vorlagen festgestellt"
      ],
      "error during rendering: %s": [
        "Fehler beim Rendern: %s"
      ],
      "template": [
        "Vorlage"
      ],
      "Cannot specify both bookmark_id and search_query": [
        "bookmark_id und search_query konnte nicht angegeben werden"
      ],
      "Unknown input %{input_name} for template %{template_name}": [
        "Unbekannte Eingabe %{input_name} für Vorlage %{template_name}"
      ],
      "Template with id '%{id}' was not found": [
        "Vorlage mit ID '%{id}' nicht gefunden"
      ],
      "Feature input %{input_name} not defined in template %{template_name}": [
        "Funktionseingabe %{input_name} nicht definiert in Vorlage %{template_name}"
      ],
      "No template mapped to feature %{feature_name}": [
        "Der Funktion %{feature_name} wurde keine Vorlage zugewiesen"
      ],
      "The template %{template_name} mapped to feature %{feature_name} is not accessible by the user": [
        "Der Benutzer kann auf die Vorlage %{template_name}, die der Funktion %{feature_name} zugewiesen ist, nicht zugreifen"
      ],
      "Job Invocation": [
        "Job-Aufruf"
      ],
      "Duplicated inputs detected: %{duplicated_inputs}": [
        "Doppelte Eingaben gefunden: %{duplicated_inputs}"
      ],
      "Unknown remote execution feature %s": [
        "Unbekannte Funktion %s zur entfernten Ausführung"
      ],
      "Effective user method \\\"%{current_value}\\\" is not one of %{valid_methods}": [
        " Effektive Benutzer-Methode \\\"%{current_value}\\\" ist keine %{valid_methods}"
      ],
      "Could not find any suitable interface for execution": [
        "Konnte keine passende Schnitstelle zum ausführen finden."
      ],
      "Subscribe to my failed jobs": [
        ""
      ],
      "Subscribe to my succeeded jobs": [
        ""
      ],
      "Subscribe to all my jobs": [
        ""
      ],
      "Script": [
        "Skript"
      ],
      "Static Query": [
        "Statische Anfrage"
      ],
      "Dynamic Query": [
        "Dynamische Anfrage"
      ],
      "Alphabetical": [
        "Alphabetisch"
      ],
      "Randomized": [
        "Zufällig"
      ],
      "Cannot resolve hosts without a user": [
        "Hosts können nicht ohne Benutzer aufgelöst werden"
      ],
      "Cannot resolve hosts without a bookmark or search query": [
        "Hosts können nicht ohne Lesezeichen oder Suchanfrage aufgelöst werden"
      ],
      "Must select a bookmark or enter a search query": [
        "Es muss ein Lesezeichen oder eine Suchanfrage ausgewählt werden"
      ],
      "Input": [
        "Eingabe"
      ],
      "Not all required inputs have values. Missing inputs: %s": [
        "Nicht alle erforderlichen Eingaben haben Werte. Fehlende Eingaben: %s"
      ],
      "Internal proxy selector can only be used if Katello is enabled": [
        "Der interne Proxy-Selektor kann nur verwendet werden, wenn Katello aktiviert ist"
      ],
      "default_capsule method missing from SmartProxy": [
        "default_capsule-Methode fehlt in SmartProxy"
      ],
      "Can't find Job Invocation for an id %s": [
        ""
      ],
      "Latest Jobs": [
        ""
      ],
      "Name": [
        "Name"
      ],
      "State": [
        "Status"
      ],
      "Started": [
        "Gestartet"
      ],
      "No jobs available": [
        ""
      ],
      "Results": [
        "Ergebnisse"
      ],
      "Schedule": [
        "Plan"
      ],
      "Concurrency level limited to": [
        "Gleichzeitigkeitsstufe begrenzt auf"
      ],
      "tasks at a time": [
        "Aufgaben gleichzeitig"
      ],
      "Scheduled to start before": [
        "Geplanter Start vor"
      ],
      "Scheduled to start at": [
        "Geplanter Start um"
      ],
      "Timeout to kill after": [
        "Timeout, um danach den kill-Befehl danach"
      ],
      "seconds": [
        "Sekunden"
      ],
      "Time to pickup": [
        ""
      ],
      "Target hosts": [
        "Zielhosts"
      ],
      "Bookmark": [
        "Lesezeichen"
      ],
      "Manual selection": [
        "Manuelle Auswahl"
      ],
      "using ": [
        "verwende"
      ],
      "Execution order": [
        "Ausführungsreihenfolge"
      ],
      "Organization": [
        "Organisation"
      ],
      "Location": [
        "Standort"
      ],
      "SSH User": [
        "SSH Benutzer"
      ],
      "Evaluated at:": [
        "Evaluiert an:"
      ],
      "User Inputs": [
        "Benutzereingaben"
      ],
      "Description": [
        "Beschreibung"
      ],
      "Job template": [
        "Job-Vorlage "
      ],
      "Resolves to": [
        "Wird aufgelöst zu"
      ],
      "hosts": [
        "Hosts"
      ],
      "Refresh": [
        "Aktualisieren"
      ],
      "Preview": [
        "Vorschau"
      ],
      "Display advanced fields": [
        "Erweiterte Felder einblenden"
      ],
      "Hide advanced fields": [
        "Erweiterte Felder ausblenden"
      ],
      "SSH user": [
        ""
      ],
      "A user to be used for SSH.": [
        ""
      ],
      "Effective user": [
        "Effektiver Benutzer"
      ],
      "A user to be used for executing the script. If it differs from the SSH user, su or sudo is used to switch the accounts.": [
        "Ein Benutzer, der für die Ausführung des Skripts verwendet werden soll. Wenn dieser sich vom SSH-Benutzer unterscheidet, kann mittels su oder sudo der Account gewechselt werden."
      ],
      "Timeout to kill": [
        "Timeout zum kill-Befehl"
      ],
      "Time in seconds from the start on the remote host after which the job should be killed.": [
        "Zeit in Sekunden ab dem Start auf dem Remote-Host, nach der der Job beendet werden soll."
      ],
      "Interval in seconds, if the job is not picked up by a client within this interval it will be cancelled.": [
        ""
      ],
      "Password": [
        "Passwort"
      ],
      "Password is stored encrypted in DB until the job finishes. For future or recurring executions, it is removed after the last execution.": [
        "Das Passwort wird verschlüsselt in der DB gespeichert, bis der Job abgeschlossen ist. Bei zukünftigen oder wiederkehrenden Ausführungen wird sie nach der letzten Ausführung entfernt."
      ],
      "Private key passphrase": [
        "Privat-Key Kennwort"
      ],
      "Key passhprase is only applicable for SSH provider. Other providers ignore this field. <br> Passphrase is stored encrypted in DB until the job finishes. For future or recurring executions, it is removed after the last execution.": [
        "Key passhprase gilt nur für SSH-Anbieter. Andere Anbieter ignorieren dieses Feld. <br> Die Passphrase wird verschlüsselt in der DB gespeichert, bis der Job abgeschlossen ist. Bei zukünftigen oder wiederkehrenden Ausführungen wird sie nach der letzten Ausführung entfernt."
      ],
      "Effective user password": [
        "Effektives Benutzerpasswort"
      ],
      "Effective user password is only applicable for SSH provider. Other providers ignore this field. <br> Password is stored encrypted in DB until the job finishes. For future or recurring executions, it is removed after the last execution.": [
        "Das gültige Benutzerkennwort gilt nur für den SSH-Anbieter. Andere Anbieter ignorieren dieses Feld. <br> Das Passwort wird verschlüsselt in der DB gespeichert, bis der Job abgeschlossen ist. Bei zukünftigen oder wiederkehrenden Ausführungen wird sie nach der letzten Ausführung entfernt."
      ],
      "Concurrency level": [
        "Parallelitätsebene"
      ],
      "Run at most N tasks at a time. If this is set and proxy batch triggering is enabled, then tasks are triggered on the smart proxy in batches of size 1.": [
        "Führen Sie höchstens N Aufgaben gleichzeitig aus. Wenn dies gesetzt und die Proxy-Batch-Triggerung aktiviert ist, werden Aufgaben auf dem Smart Proxy in Batches der Größe 1 ausgelöst."
      ],
      "Execution ordering": [
        "Ausführungsorder"
      ],
      "Execution ordering determines whether the jobs should be executed on hosts in alphabetical order or in randomized order.<br><ul><li><b>Ordered</b> - executes the jobs on hosts in alphabetical order</li><li><b>Randomized</b> - randomizes the order in which jobs are executed on hosts</li></ul>": [
        "Die Ausführungsreihenfolge legt fest, ob die Jobs auf Hosts in alphabetischer Reihenfolge oder in zufälliger Reihenfolge ausgeführt werden sollen. <br><ul><li><b>Ordered </b>- führt die Jobs auf Hosts in alphabetischer Reihenfolge aus </li><li><b>Randomized </b>- randomisiert die Reihenfolge, in der Jobs auf Hosts ausgeführt werden </li></ul>"
      ],
      "Type of query": [
        "Anfragetyp"
      ],
      "Type has impact on when is the query evaluated to hosts.<br><ul><li><b>Static</b> - evaluates just after you submit this form</li><li><b>Dynamic</b> - evaluates just before the execution is started, so if it's planned in future, targeted hosts set may change before it</li></ul>": [
        ""
      ],
      "The final host list may change because the selected query is dynamic.  It will be rerun during execution.": [
        "Die endgültige Hostliste kann sich ändern, da die ausgewählte Anfrage dynamisch ist. Sie wird während der Ausführung wiederholt."
      ],
      "...and %{count} more": [
        "",
        ""
      ],
      "No hosts found.": [
        "Keine Hosts gefunden"
      ],
      "Close": [
        "Schließen"
      ],
      "Current organization %{org_c} is different from job's organization %{org_j}.": [
        "Die aktuelle Organisation %{org_c} unterscheidet sich von der Organisation des Jobs %{org_j}."
      ],
      "Current location %{loc_c} is different from job's location %{loc_j}.": [
        "Der aktuelle Standort %{loc_c} unterscheidet sich vom Standort des Jobs %{loc_j}."
      ],
      "The dynamic query '%{query}' was not resolved yet. The list of hosts to which it would resolve now can be seen %{here}.": [
        "Die dynamische Anfrage '%{query}' wurde noch nicht aufgelöst. Die Liste von Hosts, zu denen sie sich auflösen würde, ist jetzt %{here} zu sehen."
      ],
      "here": [
        "hier"
      ],
      "effective user": [
        "Effektiver Benutzer"
      ],
      "Total hosts": [
        "Hosts gesamt"
      ],
      "Hosts gone missing": [
        "Host verschwunden"
      ],
      "This can happen if the host is removed or moved to another organization or location after the job was started": [
        "Dies kann passieren, wenn der Host entfernt oder in eine andere Organisation oder an einen anderen Standort verschoben wird, nachdem der Job gestartet wurde"
      ],
      "Providers and templates": [
        "Anbieter und Vorlagen"
      ],
      "User input": [
        "Benutzereingabe"
      ],
      "Value": [
        "Wert"
      ],
      "Search Query": [
        "Suchanfrage"
      ],
      "Status": [
        "Status"
      ],
      "Succeeded": [
        "Erfolgreich"
      ],
      "Start": [
        "Start"
      ],
      "Job invocation": [
        "Job-Aufrufe "
      ],
      "Use new job wizard": [
        ""
      ],
      "Overview": [
        "Überblick"
      ],
      "Preview templates": [
        "Vorlagen-Vorschau betrachten"
      ],
      "Recurring logic": [
        "Wiederholungslogik"
      ],
      "Job Invocations": [
        "Job-Aufrufe"
      ],
      "Foreman can run arbitrary commands on remote hosts using different providers, such as SSH or Ansible. Communication goes through the Smart Proxy so Foreman does not have to have direct access to the target hosts and can scale to control many hosts.": [
        "Foreman kann beliebige Befehle auf entfernten Hosts mit verschiedenen Anbietern wie SSH oder Ansible ausführen. Die Kommunikation läuft über den Smart Proxy, sodass Foreman keinen direkten Zugriff auf die Zielhosts haben muss und skalieren kann, um viele Hosts zu steuern."
      ],
      "Learn more about this in the documentation.": [
        "Mehr dazu in der Dokumentation."
      ],
      "Job": [
        "Job"
      ],
      "Type": [
        "Typ"
      ],
      "Add Foreign Input Set": [
        "Fremdeingabe-Satz hinzufügen"
      ],
      "add an input set for this template to reference a different template inputs": [
        "Eingabe-Satz für diese Vorlage hinzufügen, um auf andere Vorlage-Eingaben zu verweisen"
      ],
      "Snippet": [
        "Snippet"
      ],
      "Select an ERB file to upload in order to import a job template.  The template must contain metadata in the first ERB comment.": [
        "ERB-Datei zum Hochladen auswählen, um Job-Vorlage zu importieren. Die Vorlage muss Metadaten im ersten ERB Kommentar enthalten."
      ],
      "Overwrite": [
        "Überschreiben"
      ],
      "Whether to overwrite the template if it already exists": [
        "Ob Vorlage überschrieben werden soll, wenn sie bereits existiert"
      ],
      "Job Templates": [
        "Job-Vorlagen"
      ],
      "Edit %s": [
        "%s bearbeiten"
      ],
      "Edit Job Template": [
        "Job-Vorlage bearbeiten"
      ],
      "Import": [
        "Import"
      ],
      "New Job Template": [
        "Neue Job-Vorlage"
      ],
      "JobTemplate|Name": [
        "JobVorlage|Name"
      ],
      "JobTemplate|Snippet": [
        "Snippet"
      ],
      "JobTemplate|Locked": [
        "Gesperrt"
      ],
      "Actions": [
        "Aktionen"
      ],
      "This template is locked for editing.": [
        "Diese Vorlage ist schreibgeschützt."
      ],
      "The execution interface is used for remote execution": [
        "Die Ausführungsschnittstelle wird für entfernte Ausführung verwendet"
      ],
      "Remote execution": [
        "Entfernte Ausführung"
      ],
      "Remote Execution": [
        "Entfernte Ausführung"
      ],
      "Proxies": [
        "Proxys"
      ],
      "Select as many remote execution proxies as applicable for this subnet.  When multiple proxies with the same provider are added, actions will be load balanced among them.": [
        "Wählen Sie so viele Proxys für entfernte Ausführung aus, wie es für dieses Subnetz zutreffend ist. Wenn mehrere Proxys mit demselben Provider hinzugefügt werden, dann wird die Auslastung unter diesen ausgeglichen."
      ],
      "You are not allowed to see the currently assigned template. Saving the form now would unassign the template.": [
        "Sie haben nicht die Genehmigung, die aktuell zugewiesenen Vorlagen einzusehen. Wenn Sie das Formular jetzt speichern, wird die Zuweisung der Vorlage aufgehoben."
      ],
      "Remote Execution Features": [
        "Entfernte Ausführungsfunktionen "
      ],
      "Label": [
        "Kennung"
      ],
      "Edit Remote Execution Feature": [
        "Entfernte Ausführungsfunktionen bearbeiten"
      ],
      "A job '%{job_name}' has %{status} at %{time}": [
        ""
      ],
      "Job result": [
        ""
      ],
      "Failed hosts": [
        ""
      ],
      "See more details at %s": [
        ""
      ],
      "Foreign input set": [
        "Fremdeingabe-Satz"
      ],
      "remove template input set": [
        "Vorlageneingabe-Satz entfernen"
      ],
      "A comma separated list of input names to be excluded from the foreign template.": [
        "Kommagetrennte Liste von Eingabenamen, die aus der Fremdvorlage auszuschließen ist"
      ],
      "Template Invocation for %s": [
        "Vorlagen-Aufruf für %s"
      ],
      "Back to Job": [
        "Zurück zum Job"
      ],
      "Toggle command": [
        "Umschalt-Befehl"
      ],
      "Toggle STDERR": [
        "Umschalt STDERR"
      ],
      "Toggle STDOUT": [
        "Umschalt STDOUT"
      ],
      "Toggle DEBUG": [
        "Umschalt DEBUG"
      ],
      "Target: ": [
        "Ziel:"
      ],
      "using Smart Proxy": [
        ""
      ],
      "Scroll to bottom": [
        "Zum Ende scrollen"
      ],
      "Scroll to top": [
        "Zum Anfang scrollen"
      ],
      "Could not display data for job invocation.": [
        "Daten für Jobaufruf konnten nicht angezeigt werden."
      ],
      "Unsupported or no operating system found for this host.": [
        "Betriebssystem für diesen Host nicht unterstützt oder nicht gefunden."
      ],
      "A job '%{subject}' has finished successfully": [
        "Ein Job '%{subject}' wurde erfolgreich beendet"
      ],
      "Job Details": [
        "Job Details"
      ],
      "A job '%{subject}' has failed": [
        ""
      ],
      "Remote execution job": [
        ""
      ],
      "A notification when a job finishes": [
        ""
      ],
      "Unable to create mail notification: %s": [
        "Unable to create mail notification: %s"
      ],
      "Search the host for any proxy with Remote Execution, useful when the host has no subnet or the subnet does not have an execution proxy": [
        "Den Host nach einem Proxy mit entfernter Ausführung durchsuchen. Dies ist nützlich, wenn der Host kein Subnetz hat oder das Subnetz keinen Proxy für die Ausführung hat."
      ],
      "Fallback to Any Proxy": [
        "Fallback auf einen beliebigen Proxy"
      ],
      "Search for remote execution proxy outside of the proxies assigned to the host. The search will be limited to the host's organization and location.": [
        "Suchen Sie nach einem Remote-Ausführungsproxy außerhalb der dem Host zugewiesenen Proxys. Die Suche wird auf die Organisation und den Standort des Hosts beschränkt."
      ],
      "Enable Global Proxy": [
        "Globalen Proxy aktivieren"
      ],
      "Default user to use for SSH.  You may override per host by setting a parameter called remote_execution_ssh_user.": [
        "Standardbenutzer für SSH. Kann für jeden Host einzeln überschrieben werden, indem Sie ein Parameter namens remote_execution_ssh_user bestimmen."
      ],
      "Default user to use for executing the script. If the user differs from the SSH user, su or sudo is used to switch the user.": [
        "Standardbenutzer, der für die Ausführung des Skripts verwendet werden soll. Wenn dieser sich vom SSH-Benutzer unterscheidet, kann mittels su oder sudo der Benutzer gewechselt werden."
      ],
      "Effective User": [
        "Effektiver Benutzer"
      ],
      "What command should be used to switch to the effective user. One of %s": [
        "Welcher Befehl für den Wechsel zum effektiven Benutzer verwendet werden soll. Einer von %s"
      ],
      "Effective User Method": [
        "Effektive Benutzermethode"
      ],
      "Whether we should sync templates from disk when running db:seed.": [
        "Ob Vorlagen von der Festplatte synchronisiert werden sollten, wenn db:seed ausgeführt wird."
      ],
      "Sync Job Templates": [
        "Synchronisations Job-Vorlage"
      ],
      "Port to use for SSH communication. Default port 22. You may override per host by setting a parameter called remote_execution_ssh_port.": [
        "Port für die Verwendung von SSH Kommunikation. Standardport 22. \\nSie können diese Einstellung pro Host mit dem Parameter remote_execution_ssh_port überschreiben."
      ],
      "SSH Port": [
        "SSH Port"
      ],
      "Should the ip addresses on host interfaces be preferred over the fqdn? It is useful when DNS not resolving the fqdns properly. You may override this per host by setting a parameter called remote_execution_connect_by_ip. For dual-stacked hosts you should consider the remote_execution_connect_by_ip_prefer_ipv6 setting": [
        ""
      ],
      "Connect by IP": [
        "Verbindung über IP"
      ],
      "When connecting using ip address, should the IPv6 addresses be preferred? If no IPv6 address is set, it falls back to IPv4 automatically. You may override this per host by setting a parameter called remote_execution_connect_by_ip_prefer_ipv6. By default and for compatibility, IPv4 will be preferred over IPv6 by default": [
        ""
      ],
      "Prefer IPv6 over IPv4": [
        ""
      ],
      "Default password to use for SSH. You may override per host by setting a parameter called remote_execution_ssh_password": [
        "Standardkennwort für SSH. Sie können pro Host überschreiben, indem Sie einen Parameter namens remote_execution_ssh_password setzen"
      ],
      "Default SSH password": [
        "Standard SSH Passwort"
      ],
      "Default key passphrase to use for SSH. You may override per host by setting a parameter called remote_execution_ssh_key_passphrase": [
        "Für SSH zu verwendende Standardschlüssel-Passphrase. Sie können pro Host überschreiben, indem Sie einen Parameter namens remote_execution_ssh_key_passphrase setzen"
      ],
      "Default SSH key passphrase": [
        "Standard SSH-Key Kennwort"
      ],
      "Amount of workers in the pool to handle the execution of the remote execution jobs. Restart of the dynflowd/foreman-tasks service is required.": [
        "Anzahl der Worker im Pool, die die Ausführung der Remote-Ausführungsjobs verarbeiten. Neustart des Dienstes dynflowd/foreman-tasks ist erforderlich."
      ],
      "Workers pool size": [
        "Größe des Arbeiterpools"
      ],
      "When enabled, working directories will be removed after task completion. You may override this per host by setting a parameter called remote_execution_cleanup_working_dirs.": [
        "Wenn diese Option aktiviert ist, werden Arbeitsverzeichnisse nach Abschluss der Aufgabe entfernt. Sie können dies pro Host überschreiben, indem Sie einen Parameter namens remote_execution_cleanup_working_dirs setzen."
      ],
      "Cleanup working directories": [
        "Arbeitsverzeichnisse bereinigen"
      ],
      "Where to find the Cockpit instance for the Web Console button.  By default, no button is shown.": [
        "Wo man die Cockpit-Instanz für die Schaltfläche Web Console findet. Standardmäßig wird keine Schaltfläche angezeigt."
      ],
      "Cockpit URL": [
        "Cockpit-URL"
      ],
      "Choose a job template that is pre-selected in job invocation form": [
        "Wählen Sie eine Jobvorlage, die im Jobaufrufformular vorausgewählt ist"
      ],
      "Form Job Template": [
        "Formularauftragsvorlage"
      ],
      "Select a report template used for generating a report for a particular remote execution job": [
        ""
      ],
      "Job Invocation Report Template": [
        ""
      ],
      "Time in seconds within which the host has to pick up a job. If the job is not picked up within this limit, the job will be cancelled. Defaults to 1 day. Applies only to pull-mqtt based jobs.": [
        ""
      ],
      "Job templates": [
        "Job-Vorlagen"
      ],
      "Job invocations detail": [
        ""
      ],
      "Run Puppet Once": [
        "Puppet einmal ausführen"
      ],
      "Perform a single Puppet run": [
        "Führe einen einzelnen Puppet-Lauf aus"
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
        ""
      ],
      "Cronline": [
        ""
      ],
      "Monthly": [
        "Monatlich"
      ],
      "Weekly": [
        "Wöchentlich"
      ],
      "Daily": [
        "Täglich"
      ],
      "Hourly": [
        ""
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
        ""
      ],
      "Advanced fields": [
        "Erweiterte Felder"
      ],
      "Review details": [
        "Bewertungsdetails"
      ],
      "Type of execution": [
        ""
      ],
      "Hosts": [
        "Hosts"
      ],
      "Host collections": [
        ""
      ],
      "Host groups": [
        "Hostgruppen"
      ],
      "Search query": [
        "Suchanfrage"
      ],
      "Run job": [
        "Job ausführen"
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
        ""
      ],
      "Preview job description": [
        ""
      ],
      "For example: 1, 2, 3, 4, 5...": [
        ""
      ],
      "Interval in seconds, if the job is not picked up by a client within this interval it will be cancelled. Applies only to pull-mqtt based jobs": [
        ""
      ],
      "Key passphrase is only applicable for SSH provider. Other providers ignore this field. Passphrase is stored encrypted in DB until the job finishes. For future or recurring executions, it is removed after the last execution.": [
        ""
      ],
      "Effective user password is only applicable for SSH provider. Other providers ignore this field. Password is stored encrypted in DB until the job finishes. For future or recurring executions, it is removed after the last execution.": [
        ""
      ],
      "All fields are required.": [
        "Alle Felder sind erforderlich."
      ],
      "Error": [
        "Fehler"
      ],
      "Errors:": [
        "Fehler:"
      ],
      "Categories list failed with:": [
        ""
      ],
      "Templates list failed with:": [
        ""
      ],
      "Template failed with:": [
        ""
      ],
      "Preview Hosts": [
        ""
      ],
      "...and %s more": [
        ""
      ],
      "%s more": [
        ""
      ],
      "Clear all filters": [
        ""
      ],
      "There are no available input fields for the selected template.": [
        ""
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
        ""
      ],
      "Filter by host collections": [
        ""
      ],
      "Filter by host groups": [
        ""
      ],
      "Apply to": [
        ""
      ],
      "Never": [
        "Niemals"
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
        "Cron-Zeile"
      ],
      "No Target Hosts": [
        ""
      ],
      "view host names": [
        ""
      ],
      "Hide all advanced fields": [
        ""
      ],
      "Show all advanced fields": [
        ""
      ],
      "Schedule type": [
        ""
      ],
      "Recurrence": [
        ""
      ],
      "Starts at": [
        ""
      ],
      "Starts Before": [
        ""
      ],
      "Starts": [
        "Beginnt"
      ],
      "Now": [
        ""
      ],
      "Repeats": [
        "Wiederholungen "
      ],
      "Ends": [
        "Endet"
      ],
      "Purpose": [
        ""
      ],
      "Static query": [
        ""
      ],
      "Dynamic query": [
        ""
      ],
      "Description Template": [
        ""
      ],
      "A special label for tracking a recurring job. There can be only one active job with a given purpose at a time.": [
        ""
      ],
      "Query type": [
        ""
      ],
      "Type has impact on when is the query evaluated to hosts.": [
        ""
      ],
      "evaluates just after you submit this form": [
        ""
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
        "Minute (im Bereich: 0-59)"
      ],
      "is hour (range: 0-23)": [
        "Stunde (im Bereich: 0-23)"
      ],
      "is day of month (range: 1-31)": [
        "Tag des Monats (im Bereich: 1-31)"
      ],
      "is month (range: 1-12)": [
        "Monat (im Bereich: 1-12)"
      ],
      "is day of week (range: 0-6)": [
        "Wochentag (im Bereich: 0-6)"
      ],
      "The cron line supports extended cron line syntax. For details please refer to the ": [
        ""
      ],
      "documentation": [
        ""
      ],
      "At": [
        "Um"
      ],
      "Invalid time format": [
        ""
      ],
      "At minute": [
        ""
      ],
      "range: 0-59": [
        ""
      ],
      "Create": [
        "Erstellen"
      ],
      "Minute can only be a number between 0-59": [
        ""
      ],
      "Days": [
        "Tage"
      ],
      "Days of week": [
        "Wochentage"
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
        ""
      ],
      "End time needs to be after start time": [
        ""
      ],
      "On": [
        "Am"
      ],
      "After": [
        ""
      ],
      "Repeat amount can only be a positive number": [
        ""
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
        ""
      ],
      "open-help-tooltip-button": [
        ""
      ],
      "Reset to default": [
        "Rücksetzen auf Standardeinstellungen"
      ],
      "Has to be a positive number": [
        ""
      ],
      "Please refine your search.": [
        ""
      ],
      "You have %s results to display. Showing first %s results": [
        ""
      ],
      "Opening job invocation form": [
        ""
      ],
      "%s job has been invoked": [
        ""
      ],
      "Schedule a job": [
        ""
      ],
      "Recent jobs": [
        ""
      ],
      "View all jobs": [
        ""
      ],
      "View finished jobs": [
        ""
      ],
      "View running jobs": [
        ""
      ],
      "View scheduled jobs": [
        ""
      ],
      "Finished": [
        "Fertig"
      ],
      "Running": [
        "Läuft"
      ],
      "Scheduled": [
        "Geplant"
      ],
      "No results found": [
        "Keine Ergebnisse gefunden"
      ],
      "Remote Execution Interface": [
        "Remote-Ausführungsschnittstelle"
      ],
      "yes": [
        "ja"
      ],
      "no": [
        "nein"
      ],
      "Inherit from host parameter": [
        ""
      ],
      "Yes (override)": [
        "Ja (überschreiben)"
      ],
      "No (override)": [
        "Nein (Überschreiben)"
      ],
      "REX pull mode": [
        ""
      ],
      "Setup remote execution pull mode. If set to `Yes`, pull provider client will be deployed on the registered host. The inherited value is based on the `host_registration_remote_execution_pull` parameter. It can be inherited e.g. from host group, operating system, organization. When overridden, the selected value will be stored on host parameter level.": [
        ""
      ],
      "Host": [
        "Rechner"
      ],
      "Active Filters:": [
        ""
      ],
      "A plugin bringing remote execution to the Foreman, completing the config management functionality with remote management functionality.": [
        "Ein Plugin, das Foreman entfernte Ausführung bietet und die Konfig-Verwaltungsfunktion mit einer entfernten Verwaltungsfunktion ergänzt."
      ],
      "Action with sub plans": [
        "Aktion mit Unterplänen"
      ],
      "Import Puppet classes": [
        "Puppet-Klassen importieren"
      ],
      "Import facts": [
        "Fakten importieren"
      ]
    }
  }
};