import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Browser } from '@capacitor/browser';
import { Clipboard } from '@capacitor/clipboard';
import { ToastController } from '@ionic/angular';
import { Device } from '@capacitor/device';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Geolocation } from '@capacitor/geolocation';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { Network } from '@capacitor/network';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-native-features-test',
  templateUrl: './native-features-test.page.html',
  styleUrls: ['./native-features-test.page.scss'],
  standalone: false,
})
export class NativeFeaturesTestPage implements OnInit {

  capturedImage: string | undefined;
  textToCopy: string = '';
  deviceInfo: any = null;
  fileName: string = 'myFile.txt';
  fileContent: string = '';
  savedContent: Blob | string = '';
  latitude: number | null = null;
  longitude: number | null = null;
  networkStatus: string = 'Checking...';
  private networkListener: any;
  shareTitle: string = '';
  shareText: string = '';
  shareUrl: string = '';

  constructor(private router: Router, private toastController: ToastController) { }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Camera, // Use 'CameraSource.Photos' to pick from gallery
      resultType: CameraResultType.Base64,
    });

    this.capturedImage = `data:image/jpeg;base64,${image.base64String}`;
  }

  async getDeviceInfo() {
    this.deviceInfo = await Device.getInfo();
  }

  async copyToClipboard() {
    if (!this.textToCopy) {
      this.showToast('Enter text to copy');
      return;
    }

    await Clipboard.write({
      string: this.textToCopy,
    });

    this.showToast('Text copied to clipboard!');
  }

  async readFromClipboard() {
    const { value } = await Clipboard.read();

    if (value) {
      this.showToast(`Clipboard: ${value}`);
    } else {
      this.showToast('Clipboard is empty.');
    }
  }

  async writeFile() {
    try {
      await Filesystem.writeFile({
        path: this.fileName,
        data: this.fileContent,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
      this.showToast('File saved successfully!');
    } catch (error) {
      this.showToast('Error saving file');
      console.error(error);
    }
  }

  async readFile() {
    try {
      const result = await Filesystem.readFile({
        path: this.fileName,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
      this.savedContent = result.data;
    } catch (error) {
      this.showToast('Error reading file');
      console.error(error);
    }
  }

  async deleteFile() {
    try {
      await Filesystem.deleteFile({
        path: this.fileName,
        directory: Directory.Documents,
      });
      this.savedContent = '';
      this.showToast('File deleted successfully!');
    } catch (error) {
      this.showToast('Error deleting file');
      console.error(error);
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  async shareContent() {
    try {
      await Share.share({
        title: this.shareTitle || 'Check this out!',
        text: this.shareText || 'Sharing from my Ionic app!',
        url: this.shareUrl || 'https://ionicframework.com/',
        dialogTitle: 'Share via',
      });
    } catch (error) {
      console.error('Error sharing content:', error);
    }
  }

  async getCurrentLocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    } catch (error) {
      console.error('Error getting location:', error);
    }
  }

  async hapticVibration() {
    await Haptics.vibrate();
  }

  async hapticImpact() {
    await Haptics.impact({ style: ImpactStyle.Medium });
  }

  async ngOnInit() {
    await this.checkNetworkStatus();
    this.listenToNetworkChanges();
  }

  async checkNetworkStatus() {
    const status = await Network.getStatus();
    this.networkStatus = status.connected ? 'Online' : 'Offline';
  }

  listenToNetworkChanges() {
    this.networkListener = Network.addListener('networkStatusChange', (status: { connected: any; }) => {
      this.networkStatus = status.connected ? 'Online' : 'Offline';
    });
  }

  ngOnDestroy() {
    if (this.networkListener) {
      this.networkListener.remove();
    }
  }

}
