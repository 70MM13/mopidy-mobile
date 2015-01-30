angular.module('mopidy-mobile.locales', ['pascalprecht.translate'])
  .constant('locales', {
    'en': {
      displayName: 'English',
      messages: {
        'Add Connection': 'Add Connection',
        'Add Tracks to Tracklist': 'Add Tracks to Tracklist',
        'Add to Tracklist': 'Add to Tracklist',
        'Cancel': 'Cancel',
        'Clear Tracklist': 'Clear Tracklist',
        'Clear': 'Clear',
        'Connection Name': 'Connection Name',
        'Connection': 'Connection',
        'Connections': 'Connections',
        'Consume': 'Consume',
        'Default Click Action': 'Default Click Action',
        'Edit': 'Edit',
        'Empty': 'Empty',
        'Enable Logging': 'Enable Logging',
        'Error saving playlist': 'Error saving playlist',
        'Language': 'Language',
        'Library': 'Library',
        'Log Buffer Size': 'Log Buffer Size',
        'Log Debug Messages': 'Log Debug Messages',
        'Logging': 'Logging',
        'Mopidy Host': 'Mopidy Host',
        'Mopidy Port': 'Mopidy Port',
        'Nothing playing': 'Nothing playling',
        'OK': 'OK',
        'Play All Tracks': 'Play All Tracks',
        'Play All': 'Play All',
        'Play Track': 'Play Track',
        'Playback': 'Playback',
        'Playlist Name': 'Playlist Name',
        'Playlist saved': 'Playlist saved',
        'Playlists': 'Playlists',
        'Pull to refresh': 'Pull to refresh',
        'Random': 'Random',
        'Remove': 'Remove',
        'Repeat': 'Repeat',
        'Replace Current Tracklist': 'Replace Current Tracklist',
        'Save as Playlist': 'Save as Playlist',
        'Save as': 'Save as',
        'Save': 'Save',
        'Search Results for': 'Search Results for',
        'Search Results': 'Search Results',
        'Search here': 'Search here',
        'Settings': 'Settings',
        'Single': 'Single',
        'Theme': 'Theme',
        'Tracklist': 'Tracklist',
        '{count} Tracks': '{{count}} Tracks',
        '{index} of {count}': '{{index}} of {{count}}',
      }
    },

    'de': {
      displayName: 'Deutsch',
      messages: {
        'Add Connection': 'Vebindung hinzufügen',
        'Add Tracks to Tracklist': 'Titel hinzufügen',
        'Add to Tracklist': 'Titel hinzufügen',
        'Cancel': 'Abbrechen',
        'Clear Tracklist': 'Titel löschen',
        'Clear': 'Leeren',
        'Connection Name': 'Name der Verbindung',
        'Connection': 'Verbindung',
        'Connections': 'Verbindungen',
        'Consume': 'Verbrauchsmodus',  // FIXME!
        'Default Click Action': 'Beim Klicken',
        'Edit': 'Bearbeiten',
        'Empty': 'Leer',
        'Enable Debugging': 'Debugging aktivieren',
        'Enable Logging': 'Enable Logging',
        'Error saving playlist': 'Fehler beim Speichern der Playlist',
        'Language': 'Sprache',
        'Library': 'Bibliothek',
        'Log Buffer Size': 'Log Buffer Size',
        'Log Debug Messages': 'Log Debug Messages',
        'Logging': 'Logging',
        'Mopidy Host': 'Mopidy Host',
        'Mopidy Port': 'Mopidy Port',
        'Nothing playing': 'Nichts spielt',  // FIXMEQ
        'OK': 'OK',
        'Play All Tracks': 'Alle Titel abspielen',
        'Play All': 'Alle abspielen',
        'Play Track': 'Titel abspielen',
        'Playback': 'Wiedergabe',
        'Playlist Name': 'Name der Playlist',
        'Playlist saved': 'Playlist gespeichert',
        'Playlists': 'Listen',
        'Pull to refresh': 'Zum Aktualisieren ziehen',
        'Random': 'Zufällig',
        'Remove': 'Löschen',
        'Repeat': 'Wiederholen',
        'Replace Current Tracklist': 'Titel ersetzen',
        'Save as Playlist': 'Als Playlist speichern',
        'Save as': 'Speichern unter',
        'Save': 'Speichern',
        'Search Results for': 'Ergebnisse für',
        'Search Results': 'Suchergebnisse',
        'Search here': 'Hier suchen',
        'Settings': 'Einstellungen',
        'Single': 'Einzelmodus',
        'Theme': 'Design',  // FIXME!
        'Tracklist': 'Titel',
        '{count} Tracks': '{{count}} Titel',
        '{index} of {count}': '{{index}} von {{count}}',
      }
    }
  })

  .factory('missingTranslationHandler', function($log) {
    return function(translationId) {
      $log.warn('Missing translation: ' + translationId);
    };
  })

  .filter('duration', function() {
    // TODO: (potentially) locale-specific handling
    return function(ms) {
      if (ms === undefined || ms === null) {
        return 'n/a';
      }
      var s = Math.round(ms / 1000);
      var sec = s % 60;
      var min = parseInt(s / 60);
      var value = min + ':' + (sec < 10 ? '0' : '') + sec;
      return value;
    };
  })

  .config(function($translateProvider, locales) {
    angular.forEach(locales, function(locale, id) {
      $translateProvider.translations(id, locale.messages);
    });
    $translateProvider.useMissingTranslationHandler('missingTranslationHandler');
  })
;