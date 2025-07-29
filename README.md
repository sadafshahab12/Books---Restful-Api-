✅ bookSchema.pre('save', ...)
pre means: "Before this action happens..."

'save' means: "Before this document gets saved to MongoDB..."

Yeh ek hook/middleware hai jo Mongoose ke schema ke sath lagta hai.

Ye tab chalta hai jab:

Aap .save() method use karte ho.

Ya new Book({...}).save() karte ho.

✅ function (next) { ... }
Ye ek callback function hai jo middleware ke tor pe kaam karta hai.

Isme aap wo kaam likhte ho jo "save" se pehle hona chahiye.

next() ka matlab hai: "ab agla kaam karo, mujhe koi issue nahi."
