# Web Service Documentation: DTE Certification/Cancellation (INFILE)

## 1. Introduction
This manual describes the use of the Web Service intended for the certification/cancellation of Electronic Tax Documents (DTE) in Guatemala through INFILE. The service allows sending a payload in XML format along with access credentials in the HTTPS headers to obtain the document certification as a response.

## 2. Prerequisites
* **Valid credentials** to consume the service (API User, API Key, Signature User, Signature Key, Unique Identifier).
* **Basic knowledge** in web service consumption (REST).
* **Ability** to generate the XML with the correct DTE structure.

## 3. Endpoint
* **Method:** `POST`
* **Description:** Receives an XML containing the document to be certified. Credentials must be sent in the headers.
* **URL:** `https://certificador.feel.com.gt/fel/procesounificado/transaccion/v2/xml`
* **Content-Type:** `application/xml`

(C:/Users/YourUsername/Desktop/postman1.png)

## 4. Required Headers
The client must send the following headers as part of the request:
* **UsuarioAPI:** User assigned for the consumption of the service.
* **LlaveAPI:** Key provided for the use of the API.
* **UsuarioFirma:** User assigned for the signing of documents.
* **LlaveFirma:** Key provided for use.
* **Identificador:** Transaction identifier to avoid duplication; this data must be unique for each transaction performed.

## 5. Payload Structure (XML)
The body of the request must be a valid XML with the corresponding DTE or cancellation. To see an XML example, use the documents within the "EJEMPLOS XML" folder attached to this file.

## 6. Service Response
The service response will be a JSON that includes the certification information (Series, Number, UUID) and the certified document encoded in base64.

If you wish to view the PDF of the document, it can be done through the following URL by placing the UUID at the end:
`https://report.feel.com.gt/ingfacereport/ingfacereport_documento?uuid=PLACE_UUID_HERE`

## 7. Important Points
* If a document was **Cancelled** and an attempt is made to cancel it again, the Unified Web Service will reject the request and indicate that the document was previously cancelled and, for your reference, will show the cancellation date of the document in brackets.
* When the issuer's status is **“Implementation”**, whenever a document is certified, an `alerta_infile` will be generated, which specifies that the document is not fiscally valid, as it was processed under a test environment. The alert makes the following mention:

    > "This document was processed in our SandBox in test mode; under no circumstances should it be used as a tax receipt. Whoever fails to comply will be sanctioned with fines according to the current agreement."

* In the event the unique identifier is sent in another transaction, the service will return a result status of `true` and will return the following message in the `descripción_alertas_infile` field:
    * "Documento enviado previamente."
    * "Documento consultado en modalidad de re-intento."

If you have a development or ERP in one of the following languages:
* Python
* Java
* .NET
* PHP

**Ask about our FEL connectors.**