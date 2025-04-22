# 🧩 Microservicios con Redis Streams y API Gateway con NGINX

Este proyecto demuestra una arquitectura moderna de microservicios desacoplados, donde los servicios se comunican mediante eventos a través de **Redis Streams**. Todo el sistema está orquestado con **Docker Compose**, y expuesto mediante un **API Gateway implementado con NGINX**.

---

## 🚀 Características principales

- ✅ Microservicio de **Registro de Usuarios**
- ✅ Microservicio de **Notificaciones** (basado en eventos)
- ✅ Comunicación mediante **Redis Streams**
- ✅ **API Gateway** con NGINX como entrada única
- ✅ Desplegado totalmente con Docker Compose

---

## 🧱 Arquitectura

```plaintext
[Cliente/Postman] 
     |
     v
[API Gateway - NGINX]
     |
     v
[Microservicio Registro Usuario] ---> [Redis Streams] ---> [Microservicio Notificaciones]
