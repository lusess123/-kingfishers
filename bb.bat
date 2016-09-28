@echo off
echo Delete the output directory!
rd Release /s/q
rd Debug  /s/q
echo Building Entities.sln, please wait a minute...
"C:\Windows\Microsoft.NET\Framework\v4.0.30319\MsBuild.exe" TypeScriptCore2015.csproj  
/t:rebuild 
/p:configuration=Debug  >Entities.log
echo Building Entities.sln Complete!

