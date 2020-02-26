const Home = () => (
  <ion-tabs>
    <ion-tab tab="tab-schedule">Schedule</ion-tab>

    <ion-tab tab="tab-speaker">Speaker</ion-tab>

    <ion-tab tab="tab-map" component="page-map">
      Map
    </ion-tab>

    <ion-tab tab="tab-about" component="page-about">
      About
    </ion-tab>

    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="tab-schedule">
        <ion-icon name="calendar"></ion-icon>
        <ion-label>Schedule</ion-label>
        <ion-badge>6</ion-badge>
      </ion-tab-button>

      <ion-tab-button tab="tab-speaker">
        <ion-icon name="person-circle"></ion-icon>
        <ion-label>Speakers</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="tab-map">
        <ion-icon name="map"></ion-icon>
        <ion-label>Map</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="tab-about">
        <ion-icon name="information-circle"></ion-icon>
        <ion-label>About</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
);

export default Home;
