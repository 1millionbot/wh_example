@ECHO OFF
	echo Desplegando en local . . .
    echo Recuerda que debes copiar la URL de Forwarding en la URL del WebHook de DialogFlow
    osascript -e 'tell application "Terminal" to do script "ngrok http 8080"' & npm-watch localDeploy