# Aplikacja - zadanie rekrutacyjne z JS / SAPUI5 / SAP Fiori

## Aby uruchomić aplikację wykonaj następujące kroki:

1. W terminalu uruchom następującą komendę:
   `npm install --global @ui5/cli`

2. Następnie zaktualizuj npm-a komendą:
   `npm install -g npm`

3. Potem zaktualizuj node-a pobierając odpowiedni plik z internetu:
   https://nodejs.org/en

4. Na koniec użyj komendy w folderze z projektem:
   `ui5 serve`

## O aplikacji

Interfejs aplikacji z użyciem frameworka SAPUI5 zawiera 2 widoki. Pierwszy z nich zawiera tytuł (zadanie rekrutacyjne) oraz przycisk przenoszący do kolejnego, na którym w tabeli zostaną wyświetlone dane klientów. Tabela zawiera kolumny takie jak: nazwa firmy, adres, miasto, kod pocztowy, nr telefonu. Aplikacja wykorzystuje kontrolki z biblioteki https://sapui5.hana.ondemand.com/ . Dane klientów pobieram z serwisu OData https://services.odata.org/V2/Northwind/Northwind.svc encja „Customers”. Kolumna „Nazwa firmy” ma możliwość sortowania rosnąco/malejąco oraz kolumna „Miasto” ma funkcjonalność filtrowania. Aplikacja wykorzystuje m.in. pliki xml (do widoków), pliki i18n, deskryptor, routing i nawigację.
