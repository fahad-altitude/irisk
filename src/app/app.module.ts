import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { AdddepositsPage } from '../pages/adddeposits/adddeposits';
import { BookingPage } from '../pages/booking/booking';
import { BookingaddPage } from '../pages/bookingadd/bookingadd';
import { BookingaddselectionPage } from '../pages/bookingaddselection/bookingaddselection';
import { BookingdetailPage } from '../pages/bookingdetail/bookingdetail';
import { CommunityPage } from '../pages/community/community';
import { CommunitywallPage } from '../pages/communitywall/communitywall';
import { CommunitywallpostPage } from '../pages/communitywallpost/communitywallpost';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { DepositsPage } from '../pages/deposits/deposits';
import { DepositedetailPage } from '../pages/depositedetail/depositedetail';
import { EpaytabPage } from '../pages/epaytab/epaytab';
import { EpaypaymentdetailPage } from '../pages/epaypaymentdetail/epaypaymentdetail';
import { EpayinvoicedetailPage } from '../pages/epayinvoicedetail/epayinvoicedetail';
import { HelpdestmytckPage } from '../pages/helpdestmytck/helpdestmytck';
import { HelpdestindPage} from '../pages/helpdestind/helpdestind';
import { HelpdestcreatePage } from '../pages/helpdestcreate/helpdestcreate';
import { LoginPage } from '../pages/login/login';
import { NoticboardPage } from '../pages/noticboard/noticboard';
import { NoticboarddetailPage } from '../pages/noticboarddetail/noticboarddetail';
import { PromoPage } from '../pages/promo/promo';
import { PromodetailPage } from '../pages/promodetail/promodetail';
import { ServicesPage } from '../pages/services/services';
import { ServicesdetailPage } from '../pages/servicesdetail/servicesdetail';
import { ServicesdetailvendorPage } from '../pages/servicesdetailvendor/servicesdetailvendor';
import { UnitsPage } from '../pages/units/units';
import { UsefulinfotabPage } from '../pages/usefulinfotab/usefulinfotab';
import { VisitortabPage } from '../pages/visitortab/visitortab';
import { VisitorPage } from '../pages/visitor/visitor';
import { VisitorshowPage } from '../pages/visitorshow/visitorshow';
import { VisitoraddPage } from '../pages/visitoradd/visitoradd';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { MyprofiledetailPage } from '../pages/myprofiledetail/myprofiledetail';
import { MyprofileinvitePage } from '../pages/myprofileinvite/myprofileinvite';
import { MyprofilesosPage } from '../pages/myprofilesos/myprofilesos';
import { MyprofileusermanagementPage } from '../pages/myprofileusermanagement/myprofileusermanagement';
import { MyprofileuservehiclePage } from '../pages/myprofileuservehicle/myprofileuservehicle';

import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { CallNumber } from '@ionic-native/call-number';
import { ImagePicker } from '@ionic-native/image-picker';
import { IonicStorageModule } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { Base64 } from '@ionic-native/base64';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    LoginPage,
    CommunityPage,
    UnitsPage,
    DepositsPage,
    AdddepositsPage,
    NoticboardPage,
    NoticboarddetailPage,
    HelpdestmytckPage,
    HelpdestindPage,
    HelpdestcreatePage,
    CommunitywallPage,
    CommunitywallpostPage,
    UsefulinfotabPage,
    VisitortabPage,
    VisitorPage,
    VisitorshowPage,
    EpaytabPage,
    EpaypaymentdetailPage,
    EpayinvoicedetailPage,
    EpayinvoicedetailPage,
    BookingPage,
    BookingaddPage,
    BookingaddselectionPage,
    VisitoraddPage,
    ServicesPage,
    ServicesdetailPage,
    ServicesdetailvendorPage,
    PromoPage,
    DepositedetailPage,
    PromodetailPage,
    ChangepasswordPage,
    MyprofilePage,
    MyprofiledetailPage,
    MyprofileinvitePage,
    MyprofilesosPage,
    MyprofileusermanagementPage,
    MyprofileuservehiclePage,
    BookingdetailPage,
    ForgotpasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    IonicImageViewerModule,
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    LoginPage,
    CommunityPage,
    UnitsPage,
    DepositsPage,
    AdddepositsPage,
    NoticboardPage,
    NoticboarddetailPage,
    HelpdestmytckPage,
    HelpdestindPage,
    HelpdestcreatePage,
    CommunitywallPage,
    CommunitywallpostPage,
    UsefulinfotabPage,
    VisitortabPage,
    VisitorPage,
    VisitorshowPage,
    EpaytabPage,
    EpaypaymentdetailPage,
    EpayinvoicedetailPage,
    EpayinvoicedetailPage,
    BookingPage,
    BookingaddPage,
    BookingaddselectionPage,
    VisitoraddPage,
    ServicesPage,
    ServicesdetailPage,
    ServicesdetailvendorPage,
    PromoPage,
    DepositedetailPage,
    PromodetailPage,
    ChangepasswordPage,
    MyprofilePage,
    MyprofiledetailPage,
    MyprofileinvitePage,
    MyprofilesosPage,
    MyprofileusermanagementPage,
    MyprofileuservehiclePage,
    BookingdetailPage,
    ForgotpasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    CallNumber,
    ImagePicker,
    FilePath,
    File,
    Base64,
    FileTransfer,
    FileTransferObject,
    File,
    Base64ToGallery,
    PhotoViewer
  ]
})
export class AppModule {}
