# ระบบซ่อมบำรุงครุภัณฑ์ โรงพยาบาลสังขละบุรี
## (Sangkhlaburi Hospital Medical Equipment Maintenance System)

ระบบบริหารจัดการและแจ้งซ่อมครุภัณฑ์ออนไลน์ รองรับการทำงานแบบเรียลไทม์ผ่าน **Firebase Realtime Database** และสามารถเปิดใช้งานบนเว็บ/มือถือผ่าน **GitHub Pages** ได้ฟรี

---

## 📁 โครงสร้างไฟล์ในโปรเจกต์

| ไฟล์ | หน้าที่ |
|---|---|
| `index.html` | ตัวระบบหลัก (UI, ตรรกะงานซ่อม, รายงาน, BI และ Firebase Realtime Sync) |
| `firebase-config.js` | ไฟล์ระบุการตั้งค่าเชื่อมต่อ Firebase Realtime Database |
| `database.rules.json` | กฎความปลอดภัย (Security Rules) ของ Firebase Realtime Database |
| `.gitignore` | กำหนดไฟล์ที่ไม่ต้อง push ขึ้น Git repository |
| `README.md` | คู่มือการติดตั้ง เชื่อมต่อ Firebase และการ Push ขึ้น GitHub |

---

## 🚀 ขั้นตอนที่ 1: สร้างและตั้งค่า Firebase Realtime Database

1. เข้าไปที่ [Firebase Console](https://console.firebase.google.com/) แล้วล็อกอินด้วยบัญชี Google
2. คลิก **"Add project"** (เพิ่มโปรเจกต์)
   - ตั้งชื่อโปรเจกต์ เช่น `sangkhlaburi-maintenance`
   - กด Continue จนสร้างเสร็จ
3. **เปิดใช้งาน Realtime Database**:
   - ที่เมนูด้านซ้าย เลือก **Build** > **Realtime Database**
   - คลิก **Create Database**
   - เลือกตำแหน่งที่ตั้งฐานข้อมูล แนะนำเลือก **Singapore (`asia-southeast1`)**
   - ในขั้นตอน Security Rules เลือก **Start in test mode** แล้วกด **Enable**
4. **ตั้งค่า Security Rules**:
   - ไปที่แท็บ **Rules** นำข้อความจากไฟล์ `database.rules.json` ไปวาง:
     ```json
     {
       "rules": {
         ".read": true,
         ".write": true
       }
     }
     ```
   - กด **Publish**
5. **รับโค้ดการเชื่อมต่อ (Firebase Config)**:
   - ไปที่ไอคอนรูปฟันเฟือง ⚙️ มุมบนซ้าย > **Project settings**
   - เลื่อนลงมาที่หัวข้อ **Your apps** แล้วคลิกที่ไอคอนเว็บ **`</>`**
   - ตั้งชื่อ App เช่น `sk-web` แล้วคลิก **Register app**
   - คัดลอกค่าในอ็อบเจกต์ `firebaseConfig`
6. นำค่าที่ได้มาใส่ในไฟล์ `firebase-config.js`:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "sangkhlaburi-xxx.firebaseapp.com",
     databaseURL: "https://sangkhlaburi-xxx-default-rtdb.asia-southeast1.firebasedatabase.app",
     projectId: "sangkhlaburi-xxx",
     storageBucket: "sangkhlaburi-xxx.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456:web:abcdef"
   };
   ```
   *(หมายเหตุ: สามารถกดปุ่ม **"⚙️ ตั้งค่า Firebase"** ที่หน้าเว็บเพื่อกรอกการตั้งค่าผ่าน UI ได้เช่นกัน)*

---

## 🐙 ขั้นตอนที่ 2: วิธีการ Push โค้ดขึ้น GitHub

### ทางเลือก ก: ใช้ Git Command Line (เทอร์มินัล)

1. หากเครื่องคอมพิวเตอร์ยังไม่มี Git ให้ดาวน์โหลดและติดตั้งจาก [git-scm.com](https://git-scm.com/)
2. สร้าง Repository ใหม่บน [GitHub](https://github.com/new):
   - ตั้งชื่อ Repository เช่น `hospital-maintenance-system`
   - เลือกเป็น **Public** หรือ **Private**
   - **ไม่ต้อง** ติ๊กถูกที่ "Add a README file"
   - คลิก **Create repository**
3. เปิด PowerShell หรือ Command Prompt ในโฟลเดอร์โปรเจกต์นี้ (`d:\project\New folder`) แล้วรันคำสั่ง:

```bash
# 1. เริ่มต้น git repository
git init

# 2. เพิ่มไฟล์ทั้งหมด
git add .

# 3. บันทึก commit แรก
git commit -m "feat: ระบบซ่อมบำรุงครุภัณฑ์ รพ.สังขละบุรี เชื่อมต่อ Firebase Realtime Database"

# 4. เปลี่ยนชื่อ branch หลักเป็น main
git branch -M main

# 5. เชื่อมโยงกับ GitHub Repository ของคุณ (เปลี่ยน YOUR-USERNAME และ REPO-NAME เป็นของคุณ)
git remote add origin https://github.com/YOUR-USERNAME/hospital-maintenance-system.git

# 6. Push ไฟล์ขึ้น GitHub
git push -u origin main
```

---

### ทางเลือก ข: ใช้ GitHub Desktop (สะดวก ไม่ต้องพิมพ์คำสั่ง)

1. ดาวน์โหลดและติดตั้ง [GitHub Desktop](https://desktop.github.com/)
2. เปิดโปรแกรมแล้วไปที่เมนู **File** > **Add Local Repository...**
3. เลือกโฟลเดอร์โปรเจกต์ `d:\project\New folder`
4. หากโปรแกรมแจ้งว่ายังไม่ได้เป็น Git repository ให้คลิก **create a repository**
5. ที่ช่อง Commit ด้านล่างซ้าย พิมพ์ `Initial commit with Firebase` แล้วกด **Commit to main**
6. กดปุ่ม **Publish repository** เพื่ออัปโหลดขึ้นบัญชี GitHub ของคุณ

---

## 🌐 ขั้นตอนที่ 3: เปิดใช้งานเว็บไซต์ผ่าน GitHub Pages (ฟรี)

เมื่อ Push โค้ดขึ้น GitHub เรียบร้อยแล้ว สามารถเปิดให้บุคลากรโรงพยาบาลใช้งานผ่านลิงก์ได้ทันที:

1. ในหน้า GitHub Repository ของคุณ ให้คลิกที่แท็บ **Settings**
2. เมนูด้านซ้ายเลือก **Pages**
3. ในส่วน **Build and deployment**:
   - Source: เลือก **Deploy from a branch**
   - Branch: เลือก **main** และโฟลเดอร์ **/(root)**
   - คลิก **Save**
4. รอประมาณ 1-2 นาที คุณจะได้ลิงก์ เช่น:
   ```
   https://YOUR-USERNAME.github.io/hospital-maintenance-system/
   ```
5. สามารถนำ URL นี้ไปเปิดในเบราว์เซอร์บนคอมพิวเตอร์ หรือส่งลิงก์/QR Code ให้เจ้าหน้าที่เปิดบนสมาร์ตโฟนเพื่อแจ้งซ่อมได้ทันที!

---

## 💡 สรุปความสามารถหลักของระบบ

- **ซิงค์ข้อมูลเรียลไทม์ (Real-time Database)**: เมื่อเจ้าหน้าที่กดส่งงานซ่อม หรือช่างอัปเดตสถานะ ข้อมูลจะเด้งเปลี่ยนบนหน้าจอของทุกคนทันทีโดยไม่ต้องรีเฟรช
- **ระบบสำรองออฟไลน์ (Offline Fallback)**: หากอินเทอร์เน็ตหลุด ระบบจะสลับไปบันทึกลงในเครื่อง (`localStorage`) อัตโนมัติ และซิงค์ขึ้น Cloud เมื่อต่อเน็ตได้
- **ปรับแต่งข้อมูลองค์กร (Admin)**: ผู้ดูแลระบบสามารถเปลี่ยนโลโก้โรงพยาบาล, ชื่อระบบงาน, ชื่อโรงพยาบาล, เบอร์โทรศัพท์ และสโลแกนหน้าล็อกอินได้โดยตรงผ่านเมนู "🏢 ข้อมูลองค์กร"
- **จัดการรหัสผ่านผู้ใช้ (User Passwords)**: แอดมินสามารถกดปุ่ม "🔑 เปลี่ยนรหัสผ่าน" เพื่อตั้งรหัสผ่านใหม่ให้กับผู้ใช้แต่ละคนได้ทันที และผู้ใช้สามารถเปลี่ยนรหัสผ่านของตนเองได้
- **แถบประกาศ & แจ้งเตือนแบบรวมบรรทัดเดียว (Smart Notification Bar)**: แสดงสรุปแจ้งเตือนและประกาศด่วนในแถบเดียว ไม่รกหน้าจอ เมื่อคลิกจะคลี่ขยายแสดงรายการทั้งหมด และคลิกเพื่อพับเก็บได้
- **ระบบแจ้งซ่อมและจัดระดับความเร่งด่วน**: ด่วนมาก (กระทบการรักษา) / ปานกลาง / ทั่วไป
- **แดชบอร์ดผู้บริหาร (Executive BI)**: กราฟวิเคราะห์แนวโน้ม 6 เดือน, สัดส่วนสถานะงาน, ครุภัณฑ์ที่เสียบ่อย, เวลาเฉลี่ยในการซ่อม
- **สต็อกอะไหล่และการแจ้งเตือน**: แจ้งเตือนเมื่ออะไหล่ต่ำกว่าเกณฑ์ขั้นต่ำ
- **ระบบประเมินความพึงพอใจ**: ประเมินความเร็ว คุณภาพ และการบริการ พร้อมสรุปคะแนน
- **พิมพ์เอกสาร**: พิมพ์ใบแจ้งส่งซ่อม, รายงานผู้บริหารประจำเดือน, คัดลอกข้อมูลลง Excel ได้ทันที
