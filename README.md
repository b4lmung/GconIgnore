#Changelog
(5/27/2016) Added new feature : The quotes of unwanted users are now hidden behind the spoiler tag. 

(5/26/2016) Instead of deleting the entire post, the script will hide the post by using spoiler tag.

# What is this ? (มันคืออัลไร)
This is just a simple userscript for removing specific users' post on Gconhub.com.

เป็น Userscript ที่ใช้ร่วมกับ Add-on/Extension บน Browser 
โดยจะคอยบล๊อกโพสคนที่อยู่ในรายชื่อไม่โชว์ขึ้นหน้าเว็บบอร์ด Gcon


# How to install (ติดตั้งยังไง)
1. Install [greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) or [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) on your browser.
 ลง Tampermonkey Add-on บน Browser ของท่าน

2. Install [Gcon Ignore script](https://github.com/b4lmung/GconIgnore/raw/master/gconIgnore.user.js).
กดลิงค์ด้านบนและกดเลือก Install สคริปต์

3. Done !
จบ 

#How to add/remove users (เพิ่มลบ ignore user ยังไง)

Just edit blocklist array (line 11). 
แก้บรรดทัดที่ 11 โดยใส่รายชื่อ user ที่ไม่อยากเห็นโพส ยกตัวอย่างเช่น ถ้าไม่อยากเห็นโพสของ  user ที่ชื่อว่า จีคอน ให้แก้เป็น

```
var blocklist = ["user1", "user2", ... , "จีคอน"]
```


