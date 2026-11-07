# Polices OSD intégrées

Polices HD (caractères de 36×54, 256 par colonne, une colonne par page) utilisées pour redessiner l'OSD
quand aucune police n'est chargée : la police est choisie d'après le firmware du contrôleur de vol de
l'enregistrement .osd (`fc`, voir js/osd-file.js).

| Fichier    | Firmware                     |
|------------|------------------------------|
| `btfl.png` | Betaflight (et KISS)         |
| `inav.png` | INAV                         |
| `ardu.png` | ArduPilot                    |
| `quic.png` | QuickSilver                  |
| `ultr.png` | KISS Ultra                   |

Source : [fpv-wtf/msp-osd](https://github.com/fpv-wtf/msp-osd/tree/main/fonts), fichiers `font_<firmware>.png`,
commit `ef9d906cf43ac939799ef04287b19bfbd1bd968f`. Licence GPL-3.0 (fichier `LICENSE`).
