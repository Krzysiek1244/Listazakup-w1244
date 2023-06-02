Dokumentacja projektu: Lista zakupów
Opis projektu:
Projekt "Lista zakupów" jest aplikacją webową napisaną w języku JavaScript z
wykorzystaniem biblioteki React.js. Pozwala użytkownikowi tworzyć listy zakupów, dodawać, usuwać i edytować elementy na liście oraz zapisywać i odczytywać zapisane listy.

Zależności:
Projekt wykorzystuje następujące zależności:
 • React.js: Biblioteka JavaScript do budowy interfejsu użytkownika.
 • React Hooks: Wbudowane haki w React.js, takie jak useState i useEffect, które umożliwiają zarządzanie      stanem komponentów i wykonywanie efektów ubocznych. 
 • CSS: Do stylizacji aplikacji.
Struktura projektu:
Projekt składa się z następujących plików:
 • App.js: Główny komponent aplikacji, zawiera logikę i interfejs użytkownika.
 • styles.css: Plik CSS zawierający style aplikacji.


Funkcjonalności:
1. Dodawanie elementów do listy zakupów:
 • Użytkownik może wprowadzić nazwę produktu w polu tekstowym i nacisnąć przycisk "Dodaj", aby dodać element do listy.
 • Wprowadzenie pustego pola tekstowego jest niedozwolone.
2. Usuwanie elementów z listy zakupów:
 • Użytkownik może kliknąć przycisk "Usuń" przy danym elemencie, aby go usunąć z listy.
3. Edytowanie elementów na liście zakupów:
 • Użytkownik może kliknąć przycisk "Edytuj" przy danym elemencie, aby rozpocząć edycję.
 • Po rozpoczęciu edycji, nazwa elementu zostanie wczytana do pola tekstowego, gdzie użytkownik może dokonać zmian.
 •Po wprowadzeniu zmian użytkownik może kliknąć przycisk "Zapisz zmiany", aby zaktualizować element na liście.
4. Zapisywanie listy zakupów:
 • Użytkownik może kliknąć przycisk "Zapisz listę", aby zapisać aktualną listę zakupów.
 • Jeśli lista ma już nazwę, zostanie zaktualizowana.
 • Jeśli lista nie ma nazwy, użytkownik zostanie poproszony o podanie nazwy listy.
5. Wybieranie zapisanych list zakupów:
 • Użytkownik może wybrać zapisaną listę zakupów z listy dostępnych list.
 • Po wybraniu listy, aktualna lista zakupów zostanie zmieniona na wybraną listę.


6. Usuwanie zapisanych list zakupów:
 •Użytkownik może kliknąć przycisk "Usuń listę" przy danej zapisanej liście, aby ją usunąć.
7. Edytowanie nazwy zapisanej listy:
 •Użytkownik może kliknąć przycisk "Edytuj listę przy danej zapisanej liście, aby edytować jej nazwę.
 • Po kliknięciu przycisku, użytkownik zostanie poproszony o wprowadzenie nowej nazwy listy.


Instrukcja użytkowania:
1. Dodawanie elementów do listy:
  • Wprowadź nazwę produktu w polu tekstowym.
  • Kliknij przycisk "Dodaj" lub naciśnij klawisz Enter, aby dodać element do listy. 2. Usuwanie elementów z listy:
  • Kliknij przycisk "Usuń" przy danym elemencie, aby go usunąć z listy.
3. Edytowanie elementów na liście:
  •Kliknij przycisk "Edytuj" przy danym elemencie, aby rozpocząć edycję. Wprowadź nową nazwę elementu w polu tekstowym.
 • Kliknij przycisk "Zapisz zmiany", aby zaktualizować element na liście. 4. Zapisywanie listy zakupów:
 •Kliknij przycisk "Zapisz listę", aby zapisać aktualną listę zakupów. Jeśli lista ma już nazwę, zostanie zaktualizowana.
 •Jeśli lista nie ma nazwy, zostaniesz poproszony o podanie nazwy listy.
5. Wybieranie zapisanych list zakupów:
 •Kliknij na nazwę zapisanej listy zakupów, aby wybrać ją jako aktualną listę. Wybrana lista zostanie wyświetlona, a elementy z tej listy będą widoczne.
6. Usuwanie zapisanych list zakupów:
 • Kliknij przycisk "Usuń listę przy danej zapisanej liście, aby ją usunąć.
7. Edytowanie nazwy zapisanej listy:
 • Kliknij przycisk "Edytuj listę" przy danej zapisanej liście, aby edytować jej nazwę. Wprowadź nową nazwę listy w oknie dialogowym.


PROBLEMY!

Problem: Walidacja pola tekstowego przy dodawaniu elementu do listy.

Rozwiązanie: Wykorzystaj hook useState w React.js do przechowywania wartości wprowadzonej przez użytkownika. Przed dodaniem elementu do listy, sprawdź czy pole tekstowe jest puste. Jeśli tak, wyświetl komunikat błędu.
Problem: Aktualizacja listy po dodaniu, usunięciu lub edycji elementu.

Rozwiązanie: Wykorzystaj hook useEffect w React.js do monitorowania zmian w liście zakupów. Po każdej operacji dodawania, usuwania lub edycji elementu, zaktualizuj stan aplikacji i przeprowadź odpowiednie zmiany w interfejsie użytkownika.
Problem: Zapisywanie i odczytywanie list zakupów.

Rozwiązanie: Wykorzystaj localStorage w przeglądarce do przechowywania danych list zakupów. Po zapisaniu listy, użyj localStorage.setItem() do zapisania danych. Przy ponownym uruchomieniu aplikacji, użyj localStorage.getItem() do odczytania zapisanych danych i przywrócenia stanu listy zakupów.
Problem: Obsługa błędów podczas edycji listy.

Rozwiązanie: Wykorzystaj dialogi modale w React.js do wyświetlania komunikatów błędów lub okien dialogowych podczas edycji listy. Możesz użyć biblioteki takiej jak react-modal do łatwej implementacji.
Problem: Zarządzanie stanem aplikacji i przekazywanie danych między komponentami.

Rozwiązanie: Wykorzystaj hook useState i useContext w React.js do zarządzania globalnym stanem aplikacji i przekazywania danych między komponentami. Możesz utworzyć kontekst, w którym przechowujesz stan listy zakupów, a następnie udostępnić go dla innych komponentów w hierarchii.
Problem: Stylizacja interfejsu użytkownika.

Rozwiązanie: Wykorzystaj CSS i możliwości stylizacji w React.js, takie jak klasowe komponenty, styled-components lub biblioteki do tworzenia interfejsu, takie jak Material-UI lub Bootstrap. Możesz również dostosować plik styles.css, który zawiera style aplikacji.
