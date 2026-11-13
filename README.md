<p align="center"><img src="logo/telemetry-overlay-512.png" alt="Logo Telemetry Overlay" width="220"></p>

# Telemetry Overlay

**[English](#english) · [Français](#français)**

👉 **[Open the app / Ouvrir l'application](https://tguillaume02.github.io/telemetry-overlay/)** · [Presentation / Présentation](https://tguillaume02.github.io/telemetry-overlay/presentation.html)

🎬 Presentation video / Vidéo de présentation : [English](https://tguillaume02.github.io/telemetry-overlay/presentation/telemetry-overlay-presentation-en-20mb.mp4) · [Français](https://tguillaume02.github.io/telemetry-overlay/presentation/telemetry-overlay-presentation-fr-25mb.mp4)

![Telemetry Overlay interface: gauges overlaid on the preview, log graph and cut timeline](captures/interface.png)

<p align="center">
  <img src="captures/synchro.png" alt="Video / log sync panel" width="49%">
  <img src="captures/jauges.png" alt="Gauges panel with artificial horizon, compass and mini-map" width="49%">
</p>

## English

*For EdgeTX, ArduPilot, INAV, DJI, Walksnail, GoPro, Insta360 and Garmin.*

Overlays the telemetry of your flight or ride (altitude, speed, battery, radio link, throttle, GPS track, heart rate) from an EdgeTX radio log, an ArduPilot / INAV flight controller, a DJI drone, Walksnail / DJI goggles, a GoPro or Insta360 camera, or a GPS watch / bike computer (FIT, TCX, GPX) onto your videos, right in the browser. The video and the log never leave your computer.

- reads EdgeTX, ArduPilot (`.bin`, MAVLink `.tlog` / `.rlog`), INAV / Betaflight blackbox, DJI, GoPro, Insta360, Garmin and lap timers (RaceChrono, AiM, VBOX…) with no conversion;
- redraws the Walksnail / DJI WTFOS goggle OSD (`.osd`) with its firmware font, on its own or together with the gauges;
- syncs video and log automatically (take-off, motor sound or image motion);
- cuts, fades, music, markers / chapters, 3D map on real terrain, MP4 export up to 4K, vertical 9:16 and transparent PNG sequence.

No files at hand? The **Try with a sample (video + OSD)** button in the app loads one minute of flight filmed with Walksnail Avatar goggles and its INAV OSD.

### Comparison

![Infographic comparing Telemetry Overlay with other telemetry overlay tools: price, install, log formats, sync, gauges and editing](captures/comparatif-en.png)

### Slow export, graphics card at 0%?

On a laptop, Windows often runs the browser on the integrated graphics chip (Intel / AMD), and the dedicated graphics card (NVIDIA / AMD) stays at 0% during the export. To hand the browser over to it:

1. **Windows Settings › System › Display › Graphics**;
2. pick the browser (Chrome or Edge; add it with *Browse* if it is not listed) and set it to **High performance**;
3. close and restart the browser.

Also keep the PC plugged in: on battery, Windows throttles the browser (efficiency mode, green leaf icon in the Task Manager).

This repository only contains the published site; it is updated automatically.

## Français

*Pour EdgeTX, ArduPilot, INAV, DJI, Walksnail, GoPro, Insta360 et Garmin.*

Incruste la télémétrie de ton vol ou de ta sortie (altitude, vitesse, batterie, liaison radio, gaz, trace GPS, fréquence cardiaque), issue d'un log de radio EdgeTX, de contrôleur ArduPilot / INAV, de drone DJI, de lunettes Walksnail / DJI, de caméra GoPro ou Insta360, ou de montre / compteur GPS (FIT, TCX, GPX), sur tes vidéos, directement dans le navigateur. La vidéo et le log ne quittent pas ta machine.

- lit sans conversion EdgeTX, ArduPilot (`.bin`, MAVLink `.tlog` / `.rlog`), les blackbox INAV / Betaflight, DJI, GoPro, Insta360, Garmin et les chronos de circuit (RaceChrono, AiM, VBOX…) ;
- redessine l'OSD des lunettes Walksnail / DJI WTFOS (`.osd`) avec la police du firmware, seul ou avec les jauges ;
- synchronise vidéo et log tout seul (décollage, son des moteurs ou mouvement de l'image) ;
- coupes, fondus, musique, marqueurs / chapitres, carte 3D sur relief réel, export MP4 jusqu'en 4K, vertical 9:16 et séquence PNG transparente.

Pas de fichiers sous la main ? Le bouton **Essayer avec un exemple (vidéo + OSD)** de l'appli charge une minute de vol filmée avec des lunettes Walksnail Avatar et son OSD INAV.

### Comparatif

![Infographie comparant Telemetry Overlay aux autres outils d'incrustation de télémétrie : prix, installation, formats de log lus, synchronisation, jauges et montage](captures/comparatif.png)

### Export lent, carte graphique à 0 % ?

Sur un PC portable, Windows fait souvent tourner le navigateur sur la puce graphique intégrée (Intel / AMD), et la carte graphique dédiée (NVIDIA / AMD) reste à 0 % pendant l'export. Pour la confier au navigateur :

1. **Paramètres Windows › Système › Affichage › Graphiques** ;
2. choisir le navigateur (Chrome ou Edge ; l'ajouter avec *Parcourir* s'il n'est pas dans la liste) et le régler sur **Hautes performances** ;
3. fermer et relancer le navigateur.

Garder aussi le PC branché sur secteur : sur batterie, Windows bride le navigateur (mode efficacité, icône de feuille verte dans le Gestionnaire des tâches).

Ce dépôt contient uniquement le site publié ; il est mis à jour automatiquement.

---

☕ Useful project? [Buy me a coffee](https://ko-fi.com/thibaultguillaume) (card or PayPal, no account needed). · Ce projet vous est utile ? [Offrez-moi un café](https://ko-fi.com/thibaultguillaume) (carte bancaire ou PayPal, sans créer de compte).

💖 Sponsor the project / Sponsoriser le projet : [GitHub Sponsors](https://github.com/sponsors/tguillaume02)

🐞 Report a bug / Signaler un bug : [GitHub Issues](https://github.com/tguillaume02/telemetry-overlay/issues/new)

🔗 My other projects / Mes autres projets : [tguillaume02.github.io](https://tguillaume02.github.io/)
