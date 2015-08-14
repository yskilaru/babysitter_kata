describe("Babysitter Kata testing AASUME ****START-TIME=17PM :::: BED-TIME=22PM ::: MID-NIGHT=24PM *****", function() {
            it("PAID FOR ONE NIGHT OF WORK : $140", function() {
                ETime=17;
                LTime=4;
                expect(calculate()).toBe(140);
            });
            it("PAID FOR 5 HOURS,THAT IS FROM START-TIME TO BED-TIME ** $12/hour** : $60", function() {
                ETime=17;
                LTime=22;
                expect(calculate()).toBe(60);
            });
            it("PAID FOR 2 HOURS,THAT IS FROM BED-TIME TO MID-NIGHT ** $8/hour** : $16", function() {
                ETime=22;
                LTime=24;
                expect(calculate()).toBe(16);
            });
            it("PAID FOR 4 HOURS,THAT IS FROM MID-NIGHT TO END-OF-JOB ** $16/hour** : $64", function() {
                ETime=24;
                LTime=4;
                expect(calculate()).toBe(64);
            });
            it("PAID FOR 6 HOURS,THAT IS FROM 5PM TO 11PM : $68", function() {
                ETime=17;
                LTime=23;
                expect(calculate()).toBe(68);
            });
            it("PAID FOR 1 HOUR,THAT IS FROM 10PM TO 11PM : $8", function() {
                ETime=22;
                LTime=23;
                expect(calculate()).toBe(8);
            });
            it("PAID FOR 1 HOUR,THAT IS FROM 10PM TO 11PM : $8", function() {
                ETime=22;
                LTime=23;
                expect(calculate()).toBe(8);
            });
        });