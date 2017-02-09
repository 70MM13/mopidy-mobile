;(function(module) {
  'use strict';

  module.config(function(localeProvider) {
    localeProvider.locale('de', {
      language: 'de',
      displayName: 'Deutsch',
      messages: {
        'About': 'Über',
        'Add server': 'Server hinzufügen',
        'Add stream': 'Stream hinzufügen',
        'Add to playlist': 'Zu Liste hinzufügen',
        'Add to tracklist': 'Zu Titeln hinzufügen',
        'Album artist': 'Albumkünstler ',  // ???
        'Album': 'Album',
        'Any': 'Alle',  // ???
        'Artist': 'Künstler',
        'Back': 'Zurück',
        'Bitrate': 'Bitrate',
        'Cancel': 'Abbrechen',
        'Clear cache': 'Cache leeren',
        'Clear tracklist': 'Titel leeren',
        'Clear': 'Leeren',
        'Comment': 'Kommentar',
        'Composer': 'Komponist',
        'Configured servers': 'Konfigurierte Server',
        'ConnectionError': 'Verbindungsfehler',
        'Consume mode': 'Verbrauchsmodus',
        'Cover art': 'Albumcover',
        'Create playlist': 'Liste erstellen',
        'Date': 'Datum',
        'Debug messages': 'Debug-Meldungen',
        'Default click action': 'Beim Klicken',
        'Default': 'Standard',
        'Delete playlist': 'Liste löschen',
        'Delete': 'Löschen',
        'Disc number': 'Disknummer',
        'Done': 'Fertig',
        'Duration': 'Dauer',
        'Edit playlist': 'Liste bearbeiten',
        'Edit playlists': 'Listen bearbeiten',
        'Edit tracklist': 'Titel bearbeiten',
        'Error': 'Fehler',
        'Exit': 'Beenden',
        'Find exact': 'Exakte Suche',
        'Genre': 'Genre',
        'Host': 'Host',
        'Ignore': 'Ignorieren',
        'Language': 'Sprache',
        'Library': 'Bibliothek',
        'Licenses': 'Lizenzen',
        'Logging': 'Protokollierung',
        'Look and feel': 'Erscheinungsbild',  // a.k.a. "Aussehen und Verhalten"
        'Mopidy servers': 'Mopidy Server',
        'Name': 'Name',
        'No servers found': 'Keine Server gefunden',
        'Nothing playing': 'Nichts spielt',
        'OK': 'OK',
        'Path': 'Pfad',
        'Performer': 'Interpret',
        'Play next': 'Als nächstes spielen',
        'Play now': 'Jetzt spielen',
        'Playback': 'Wiedergabe',
        'Playlists': 'Listen',
        'Please make sure Zeroconf is enabled for any Mopidy servers in the same WiFi network as your device.': 'Bitte stellen Sie sicher, dass Zeroconf für alle Mopidy-Server im WLAN-Netzwerk Ihres Gerätes aktiviert ist.',
        'Port': 'Port',
        'Pull to refresh': 'Zum Aktualisieren ziehen',
        'Remove server': 'Server entfernen',
        'Replace tracklist': 'Titel ersetzen',
        'Request timeout': 'Zeitlimit für Anfragen',
        'Reset all settings to default values and restart application': 'Alle Einstellungen auf Standardwerte zurücksetzen und Applikation neu starten',
        'Reset': 'Zurücksetzen',
        'Restart application': 'Applikation neu starten',
        'Restart': 'Neustart',
        'Retry': 'Wiederholen',
        'Save as': 'Speichern unter',
        'Save': 'Speichern',
        'Search here': 'Hier suchen',
        'Search results': 'Suchergebnisse',
        'Search term': 'Suchbegriff',
        'Search {name}': 'Suche in {name}',
        'Search': 'Suchen',
        'Secure connection': 'Sichere Verbindung',
        'ServerError': 'Serverfehler',
        'Settings': 'Einstellungen',
        'Share': 'Teilen',
        'Show track info': 'Titelinformationen',
        'Sort by name': 'Nach Name',
        'Sort by scheme': 'Nach Schema',
        'Theme': 'Design',
        'Then pull to refresh, or add a server manually.': 'Ziehen Sie zum Aktualisieren, oder fügen Sie selbst einen Server hinzu.',
        'TimeoutError': 'Zeitüberschreitung',
        'Track info': 'Titelinformationen',
        'Track number': 'Titelnummer',
        'Track': 'Titel',
        'Tracklist': 'Titel',
        'Translations': 'Übersetzungen',
        'URI': 'URI',
        'URL': 'URL',
        'Version {version}': 'Version {version}',
        'Volume keys': 'Lautstärketasten',
        '{count} seconds': '{count, plural, one{1 Sekunde} other {# Sekunden}}',
        '{count} tracks': '{count, plural, =0{Keine} other{#}} Titel',
        '{index} of {count}': '{index} von {count}',
      }
    });
  });
})(angular.module('app.locale.de', ['app.services.locale']));
