#🤖 Automatización de Servicios de Autenticación (API Testing con Cypress)

Este proyecto implementa una Suite de Pruebas Automatizadas utilizando Cypress para la validación exhaustiva de los endpoints de gestión de credenciales (Registro y Login). El objetivo es asegurar la robustez, seguridad y correcta lógica de negocio del backend a nivel de servicio.

🎯 Alcance y Objetivos de la Automatización
El proyecto se centra en la ejecución de pruebas de humo y regresión directamente contra la API, sin depender de la Interfaz Gráfica (UI), validando la lógica del servidor antes de la capa de presentación.

Categoría,Caso de Prueba,Detalle de la Implementación (Lógica de Negocio)

Registro (Sign-up),Creación de Usuario Único,"Envío de datos válidos, validando que el servidor devuelva un código de estado 200 OK."

Registro (Sign-up),Manejo de Duplicidad de Usuarios,"Intento de registro duplicado, esperando la respuesta de error de negocio (""This user already exist"")."

Login (Autenticación),Acceso con Credenciales Válidas,"Simulación de sesión exitosa, validando que la respuesta incluya un Auth_token (Token de Autenticación)."

Login (Autenticación),Fallos por Credenciales Inválidas,"Validación de escenarios negativos (usuario inexistente o password incorrecta), asegurando el mensaje de fallo apropiado."

📊 Reportes y Evidencia
El proyecto está configurado para generar evidencia clara de la ejecución:

Reportería Estándar: Uso de cypress-mochawesome-reporter para informes consolidados.

Debugging: Captura automática de Videos y Screenshots de los fallos (al usar cypress run).

Ubicación de Artefactos: Los reportes y videos se encuentran en la carpeta cypress/reports/.
