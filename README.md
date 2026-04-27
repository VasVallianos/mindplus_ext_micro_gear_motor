# MicroGear — DC Micro Metal Gear Motor με Driver
## DFRobot DFR0399 — Τεχνική Τεκμηρίωση

---

## Τι είναι το MicroGear;

Το MicroGear (DFR0399) είναι ένας **DC κινητήρας με γρανάζια και ενσωματωμένο driver**. Συνδυάζει τα χαρακτηριστικά ενός DC motor και ενός 360° servo:

- **Σαν DC motor**: περιστρέφεται συνεχώς και στις δύο κατευθύνσεις
- **Σαν Servo**: ελέγχεται με ένα μόνο σήμα PWM — δεν χρειάζεται H-Bridge ή motor driver

---

## Τεχνικά Χαρακτηριστικά

| Παράμετρος | Τιμή |
|---|---|
| Τάση λειτουργίας | 4,5 – 7,5 V |
| Τάση τροφοδοσίας Arduino | 5 V (μέσω IO Shield) |
| Σήμα ελέγχου | PWM (Servo library) |
| Connector | 3-pin Gravity (GND / VCC / Signal) |
| Εύρος PWM | 0° – 180° (Servo library) |
| Στάση | 90° |
| Δεξιόστροφα (max) | 0° |
| Αριστερόστροφα (max) | 180° |
| Ρεύμα αδράνειας | < 1 mA |
| Συχνότητα PWM | 500 Hz |

---

## Αρχή Λειτουργίας

### Γιατί χρησιμοποιούμε τη Servo library;

Το MicroGear έχει **ενσωματωμένο chip ελέγχου** που μετατρέπει το σήμα PWM σε εντολή κίνησης. Χρησιμοποιεί το ίδιο πρωτόκολλο με τα 360° servos:

```
Pulse width 500μs  → write(0)   → Δεξιόστροφα MAX
Pulse width 1500μs → write(90)  → ΣΤΑΣΗ
Pulse width 2500μs → write(180) → Αριστερόστροφα MAX
```

### Αντιστοίχιση τιμών → κίνηση

```
write(0)   .............. Δεξιόστροφα — MAX ταχύτητα
write(1-89) ............. Δεξιόστροφα — μειούμενη ταχύτητα
write(90)  .............. ΣΤΑΣΗ
write(91-179) ........... Αριστερόστροφα — αυξανόμενη ταχύτητα
write(180) .............. Αριστερόστροφα — MAX ταχύτητα
```

---

## Σύνδεση

```
MicroGear   →   IO Shield V7.1
─────────────────────────────
Μαύρο (GND) →   GND
Κόκκινο (VCC)→  5V
Μπλε (Signal)→  D9 (ή οποιοδήποτε PWM pin: D3,D5,D6,D9,D10,D11)
```

> ⚠️ **Σημαντικό:** Χρησιμοποίησε αποκλειστικά PWM-capable pins (D3, D5, D6, D9, D10, D11). Τα άλλα digital pins δεν υποστηρίζουν PWM.

---

## Σχετικά Mind+ Blocks

Τα blocks που έχουν φτιαχτεί για το MicroGear:

- `microgmoveCW(PIN, SPEED)` — δεξιόστροφα συνεχώς
- `microgmoveCCW(PIN, SPEED)` — αριστερόστροφα συνεχώς
- `microgmoveCWSEC(PIN, SPEED, SEC)` — δεξιόστροφα για X δευτερόλεπτα
- `microgmoveCCWSEC(PIN, SPEED, SEC)` — αριστερόστροφα για X δευτερόλεπτα
- `microgstop(PIN)` — σταμάτημα

---

## Εγκατάσταση

Για να γίνει εγκατάσταση από URL στο Mind+:

https://raw.githubusercontent.com/VasVallianos/mindplus_ext_micro_gear_motor/main/config.json

---

*Τεκμηρίωση βασισμένη στο επίσημο DFRobot wiki για DFR0399.*
*Τελευταία ενημέρωση: Μάρτιος 2026*
