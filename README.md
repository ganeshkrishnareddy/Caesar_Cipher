## 🛡️ Caesar Cipher – Cyber Security Project

**Track Code:** CS
**Project Title:** Caesar Cipher – Encrypt & Decrypt Text

🔗 **Live Demo:** [Caesar Cipher Web App](https://darling-fenglisu-5c0dcc.netlify.app)

---

### 📌 Project Description

This project implements the **Caesar Cipher**, a basic encryption technique used in cryptography. The program allows users to:

* Input a message
* Choose a shift value
* Encrypt or decrypt the message using the Caesar Cipher algorithm

It demonstrates the principle of **substitution ciphering** used in early classical cryptography and offers a clear understanding of how basic encryption works.

---

### 🧠 How Caesar Cipher Works

The Caesar Cipher shifts each letter in the plaintext by a fixed number of positions down the alphabet. For example, with a shift of 3:

* `A → D`
* `B → E`
* ...
* `Z → C`

Decryption simply reverses the shift.

---

### ⚙️ Features

* Encrypt any alphabetic message
* Decrypt using the same shift value
* Handles both uppercase and lowercase letters
* Ignores non-alphabetic characters (punctuation, numbers)

---

### 🖥️ Tech Stack

* Python (Core Logic)
* HTML/CSS/JS (Frontend for demo)
* Hosted on **Netlify**

---

### 🚀 How to Use (Python Script)

```python
def caesar_encrypt(text, shift):
    result = ""
    for char in text:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            result += chr((ord(char) - base + shift) % 26 + base)
        else:
            result += char
    return result

def caesar_decrypt(text, shift):
    return caesar_encrypt(text, -shift)

# Example usage
msg = input("Enter your message: ")
shift = int(input("Enter shift value: "))
choice = input("Encrypt or Decrypt? (e/d): ").lower()

if choice == 'e':
    print("Encrypted:", caesar_encrypt(msg, shift))
else:
    print("Decrypted:", caesar_decrypt(msg, shift))
```

---

### 📂 GitHub Repository

You can host the project on GitHub with the following folder structure:

```
CaesarCipher/
├── main.py
├── README.md
├── web/
│   ├── index.html
│   ├── style.css
│   └── script.js
```

Make sure to update the repository link here once it's created:
👉 **GitHub Repo:** *(https://github.com/ganeshkrishnareddy/Prodigy_CS_Task_01)*

---

### 📞 Contact

If you have any questions or feedback, feel free to reach out.

---

Would you like me to create a GitHub repository structure or push code for you as well?
