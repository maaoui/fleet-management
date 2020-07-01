-- Inserts for ADDRESS Table
INSERT INTO ADDRESS(ID, CITY, POSTAL_CODE, ADDRESS)
VALUES (1, 'Warszawa', '02-672', 'ul. Domaniewska 48'),
       (2, 'Warszawa', '02-672', 'ul. Domaniewska 49'),
       (3, 'Warszawa', '02-672', 'ul. Domaniewska 50'),
       (4, 'Warszawa', '02-672', 'ul. Domaniewska 51'),
       (5, 'Warszawa', '02-672', 'ul. Domaniewska 52'),
       (6, 'Warszawa', '02-672', 'ul. Domaniewska 56'),
       (7, 'Warszawa', '02-672', 'ul. Domaniewska 47'),
       (8, 'Warszawa', '02-672', 'ul. Domaniewska 58'),
       (9, 'Warszawa', '02-672', 'ul. Domaniewska 59'),
       (10, 'Warszawa', '02-672', 'ul. Domaniewska 50'),
       (11, 'Warszawa', '02-672', 'ul. Domaniewska 48'),
       (12, 'Warszawa', '02-672', 'ul. Domaniewska 49'),
       (13, 'Warszawa', '02-672', 'ul. Domaniewska 50'),
       (14, 'Warszawa', '02-672', 'ul. Domaniewska 51'),
       (15, 'Warszawa', '02-672', 'ul. Domaniewska 52'),
       (16, 'Warszawa', '02-672', 'ul. Domaniewska 56'),
       (17, 'Warszawa', '02-672', 'ul. Domaniewska 47'),
       (18, 'Warszawa', '02-672', 'ul. Domaniewska 58'),
       (19, 'Warszawa', '02-672', 'ul. Domaniewska 59'),
       (20, 'Warszawa', '02-672', 'ul. Domaniewska 50'),
       (21, 'Wrocław', '50-001', 'ul. Domaniewska 52'),
       (22, 'Katowice', '40-001', 'ul. Domaniewska 56'),
       (23, 'Kraków', '30-001', 'ul. Domaniewska 47'),
       (24, 'Warszawa', '00-001', 'ul. Domaniewska 58'),
       (25, 'Gdańsk', '80-001', 'ul. Domaniewska 59');
-- Inserts for CAR_PART Table
INSERT INTO CAR_PART(ID, DESCRIPTION, NAME, PART_TYPE)
VALUES (1, 'Oil Comment', 'Oil', 1),
       (2, 'Tires Comment', 'Tires', 1),
       (3, 'Windscreen washer Comment', 'Windscreen washer', 1),
       (4, 'Engine Comment', 'Engine', 2),
       (5, 'Turbo Comment', 'Turbo', 2);
-- Inserts for REGION Table
INSERT INTO REGION(ID, REGION_NAME)
VALUES (1, 'Dolnośląskie'),
       (2, 'Kujawsko-Pomorskie'),
       (3, 'Lubelskie'),
       (4, 'Lubuskie'),
       (5, 'Łódzkie'),
       (6, 'Małopolskie'),
       (7, 'Mazowieckie'),
       (8, 'Opolskie'),
       (9, 'Podkarpackie'),
       (10, 'Podlaskie'),
       (11, 'Pomorskie'),
       (12, 'Śląskie'),
       (13, 'Świętokrzyskie'),
       (14, 'Warmińsko-mazurskie'),
       (15, 'Wielkopolskie'),
       (16, 'Zachodniopomorskie');
-- Inserts for WORKSHOP Table
INSERT INTO WORKSHOP(ID, EMAIL, PHONE_NUMBER, WORKSHOP_NAME, ADDRESS_ID, REGION_ID, LATITUDE, LONGITUDE)
VALUES (1, 'workshop1@workshop1.com', '693999000', 'Workshop 1', 21, 7, 51.1841002, 17.0384100),
       (2, 'workshop2@workshop2.com', '693999111', 'Workshop 2', 22, 7, 50.2584100, 19.0275400),
       (3, 'workshop3@workshop3.com', '693999222', 'Workshop 3', 23, 7, 50.0614300, 19.9365800),
       (4, 'workshop4@workshop4.com', '693999333', 'Workshop 4', 24, 7, 52.2297700, 21.0117800),
       (5, 'workshop5@workshop5.com', '693999444', 'Workshop 5', 25, 7, 54.3520500, 18.6463700);
-- Inserts for DEPARTMENT Table
INSERT INTO DEPARTMENT(ID, DEPARTMENT_NAME, ADDRESS_ID, REGION_ID)
VALUES (1, 'Department 1', 1, 1),
       (2, 'Department 2', 2, 2),
       (3, 'Department 3', 3, 3),
       (4, 'Department 4', 4, 4),
       (5, 'Department 5', 5, 5);
-- Inserts for EMPLOYEE Table
INSERT INTO EMPLOYEE(ID, EMAIL, PASSWORD, FIRST_NAME, LAST_NAME, PHONE_NUMBER, DEPARTMENT_ID, ENABLED, TOKEN_EXPIRED)
VALUES (1, 'e1@c.com', '$2y$12$hK00XbkbEtdmGnqOJo4VB.B.8gRZqVBUjC2OZURFsJ5EmcczyGqZG', 'One', 'Employee', '693999001',
        1, True, True),
       (2, 'e2@c.com', '$2y$12$qQeyz6CaJyLdrXxxn6.MHeUPSKecB9SsE1mvMpGxPZz7YrSaSbLHa', 'Two', 'Employee', '693999002',
        1, True, True),
       (3, 'e3@c.com', '$2y$12$1Ui3/Er1t.hW/4nwbyhaVOHp7nqGKPh.o7TPcpMDFPRcbIBthMwhK', 'Three', 'Employee', '693999003',
        2, True, True),
       (4, 'e4@c.com', '$2y$12$Um8eWPwyepyVeglYbMet.eqSiTCeXHZaX/0mn04xJ5IHdtcXrHolC', 'Four', 'Employee', '693999004',
        2, True, True),
       (5, 'e5@c.com', '$2y$12$3KZSW/Vr2v14NGN3Vddzae2HlzU8YfhMBvUlGzavBVR/U7lVwwtX2', 'Five', 'Employee', '693999005',
        3, True, True),
       (6, 'e6@c.com', '$2y$12$aHUNXRWGi3gJIaM.PeABy.HHhJXS2TB.bhzMvJZkkwlXKnhLQl/s2', 'Six', 'Employee', '693999006',
        3, True, True),
       (7, 'e7@c.com', '$2y$12$awXiK9x6f4iEZa6.tZubJu7xrbBUF1ipniVGzG4fXsh36VpwkwQce', 'Seven', 'Employee', '693999007',
        4, True, True),
       (8, 'e8@c.com', '$2y$12$oBnP.uY7jO1sEFdYw1M5O.6Oadg50oKrGxiz1BJjdAAGu9gjCCTIO', 'Eight', 'Employee', '693999008',
        4, True, True),
       (9, 'e9@c.com', '$2y$12$aFFTQPbaLdb.FZN6./ky0OQnqmejZhgklr0Wzm.pACaXgKG2WhsVq', 'Nine', 'Employee', '693999009',
        1, True, True),
       (10, 'e10@c.com', '$2y$12$.7OQ74y8KPaQUha16OXb7eoDN9fzgkxErPuM0tmNwLOAjwXN0Lm9K', 'Ten', 'Employee', '693999010',
        1, True, True);
-- Inserts for ROLE Table
INSERT INTO ROLE (ID, NAME)
VALUES (1, 'ROLE_ADMIN'),
       (2, 'ROLE_EMPLOYEE');
-- Inserts for PRIVILEGES Table
INSERT INTO PRIVILEGE (ID, NAME)
VALUES (1, 'PRIVILEGE_FOR_ROLE_ADMIN_1'),
       (2, 'PRIVILEGE_FOR_ROLE_ADMIN_2'),
       (3, 'PRIVILEGE_FOR_ROLE_ADMIN_3'),
       (4, 'PRIVILEGE_FOR_ROLE_ADMIN_4'),
       (5, 'PRIVILEGE_FOR_ROLE_ADMIN_5'),
       (6, 'PRIVILEGE_FOR_ROLE_EMPLOYEE_1'),
       (7, 'PRIVILEGE_FOR_ROLE_EMPLOYEE_2'),
       (8, 'PRIVILEGE_FOR_ROLE_EMPLOYEE_3'),
       (9, 'PRIVILEGE_FOR_ROLE_EMPLOYEE_4'),
       (10, 'PRIVILEGE_FOR_ROLE_EMPLOYEE_5');
-- Inserts for ROLES_PRIVILEGES Table
INSERT INTO ROLES_PRIVILEGES (ROLE_ID, PRIVILEGE_ID)
VALUES (1, 1),
       (1, 2),
       (1, 3),
       (1, 4),
       (1, 5),
       (2, 6),
       (2, 7),
       (2, 8),
       (2, 9),
       (2, 10);
-- Inserts for USERS_ROLES Table
INSERT INTO USERS_ROLES (USER_ID, ROLE_ID)
VALUES (1, 1),
       (1, 2),
       (2, 2),
       (3, 2),
       (4, 2),
       (5, 2),
       (6, 2),
       (7, 2),
       (8, 2),
       (9, 2),
       (10, 2);
-- Inserts for VEHICLE Table
INSERT INTO VEHICLE (ID, VIN, FIRST_REGISTRATION_DATE, HORSE_POWER, MAKE, MODEL, PLATE_NUMBER, WEIGHT,
                     YEAR_OF_PRODUCTION, INSURANCE_ID, VEHICLE_OWNER_ID)
VALUES (1, 'KL1NF48J7JK00000', CURRENT_TIMESTAMP, 171, 'Opel', 'Insignia', 'WW 00001', 1851, 2016, NULL, NULL),
       (2, 'KL1NF48J7JK00002', CURRENT_TIMESTAMP, 172, 'Opel', 'Insignia', 'WW 00002', 1852, 2016, NULL, NULL),
       (3, 'KL1NF48J7JK00003', CURRENT_TIMESTAMP, 173, 'Opel', 'Insignia', 'WW 00003', 1853, 2016, NULL, NULL),
       (4, 'KL1NF48J7JK00004', CURRENT_TIMESTAMP, 174, 'Opel', 'Insignia', 'WW 00004', 1854, 2016, NULL, NULL),
       (5, 'KL1NF48J7JK00005', CURRENT_TIMESTAMP, 175, 'Opel', 'Insignia', 'WW 00005', 1855, 2016, NULL, NULL),
       (6, 'KL1NF48J7JK00006', CURRENT_TIMESTAMP, 176, 'Opel', 'Insignia', 'WW 00006', 1856, 2016, NULL, NULL),
       (7, 'KL1NF48J7JK00007', CURRENT_TIMESTAMP, 177, 'Opel', 'Insignia', 'WW 00007', 1857, 2016, NULL, NULL),
       (8, 'KL1NF48J7JK00008', CURRENT_TIMESTAMP, 178, 'Opel', 'Insignia', 'WW 00008', 1858, 2016, NULL, NULL),
       (9, 'KL1NF48J7JK00009', CURRENT_TIMESTAMP, 179, 'Opel', 'Insignia', 'WW 00009', 1859, 2016, NULL, NULL),
       (10, 'KL1NF48J7JK00010', CURRENT_TIMESTAMP, 180, 'Opel', 'Insignia', 'WW 00010', 1860, 2016, NULL, NULL);
-- Inserts for EXPLOATATION_REPORT Table
INSERT INTO EXPLOATATION_REPORT (ID, VEHICLE_ID)
VALUES (1, 1),
       (2, 2),
       (3, 3),
       (4, 4),
       (5, 5),
       (6, 6),
       (7, 7),
       (8, 8),
       (9, 9),
       (10, 10);
-- Inserts for VEHICLE_USAGE_TIMESTAMP Table
INSERT INTO VEHICLE_USAGE_TIMESTAMP (ID, START_DATE_TIME, END_DATE_TIME, EMPLOYEE_ID, VEHICLE_ID)
VALUES (1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 1),
       (2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2, 2),
       (3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3, 3),
       (4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4, 4),
       (5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5, 5),
       (6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6, 6),
       (7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7, 7),
       (8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8, 8),
       (9, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 9, 9),
       (10, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 10, 10);
-- Inserts for CAR_PART_EXPENSE Table
INSERT INTO CAR_PART_EXPENSE (ID, COMMENT, CURRENCY, CURRENT_KILOMETRAGE, DATE, VALUE, CAR_PART_ID,
                              EXPLOATATION_REPORT_ID)
VALUES (1, 'Comment 1', 'PLN', 100000, CURRENT_TIMESTAMP, 100, 1, 1),
       (2, 'Comment 2', 'EUR', 125000, CURRENT_TIMESTAMP, 200, 2, 1),
       (3, 'Comment 3', 'CHF', 150000, CURRENT_TIMESTAMP, 300, 3, 1),
       (4, 'Comment 4', 'PLN', 100000, CURRENT_TIMESTAMP, 100, 1, 2),
       (5, 'Comment 5', 'EUR', 125000, CURRENT_TIMESTAMP, 200, 2, 2),
       (6, 'Comment 6', 'CHF', 150000, CURRENT_TIMESTAMP, 300, 3, 2);
-- Inserts for FUEL_EXPENSE Table
INSERT INTO FUEL_EXPENSE (ID, COMMENT, CURRENCY, CURRENT_KILOMETRAGE, DATE, VALUE, FUEL_AMOUNT,
                          FUEL_TYPE, EXPLOATATION_REPORT_ID)
VALUES (1, 'Comment 1', 'PLN', 100000, CURRENT_TIMESTAMP, 102.2, 10.22, 1, 1),
       (2, 'Comment 2', 'EUR', 125000, CURRENT_TIMESTAMP, 202.2, 20.22, 1, 1),
       (3, 'Comment 3', 'CHF', 150000, CURRENT_TIMESTAMP, 302.2, 30.22, 1, 1),
       (4, 'Comment 4', 'PLN', 100000, CURRENT_TIMESTAMP, 402.2, 40.22, 1, 2),
       (5, 'Comment 5', 'EUR', 125000, CURRENT_TIMESTAMP, 502.2, 50.22, 1, 2),
       (6, 'Comment 5', 'CHF', 150000, CURRENT_TIMESTAMP, 602.2, 60.22, 1, 2);
-- Inserts for INSURANCE Table
INSERT INTO INSURANCE (ID, COMPANY_NAME, CONTACT_NUMBER, START_DATE, END_DATE, INSURANCE_NUMBER, VEHICLE_ID)
VALUES (1, 'Insurance Company 1', '990111000', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'INS01', 1),
       (2, 'Insurance Company 2', '990222000', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'INS02', 2),
       (3, 'Insurance Company 3', '990333000', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'INS03', 3),
       (4, 'Insurance Company 4', '990444000', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'INS04', 4),
       (5, 'Insurance Company 5', '990555000', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'INS05', 5),
       (6, 'Insurance Company 6', '990666000', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'INS06', 6),
       (7, 'Insurance Company 7', '990777000', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'INS07', 7),
       (8, 'Insurance Company 8', '990888000', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'INS08', 8),
       (9, 'Insurance Company 9', '990999000', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'INS09', 9),
       (10, 'Insurance Company 10', '990010000', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'INS10', 10);
-- Inserts for OTHER_EXPENSE Table
INSERT INTO OTHER_EXPENSE (ID, COMMENT, CURRENCY, CURRENT_KILOMETRAGE, DATE, VALUE, ITEM_COUNT, EXPLOATATION_REPORT_ID)
VALUES (1, 'Comment 1', 'PLN', 101000, CURRENT_TIMESTAMP, 100, 1, 1),
       (2, 'Comment 2', 'PLN', 102000, CURRENT_TIMESTAMP, 200, 2, 1),
       (3, 'Comment 3', 'PLN', 103000, CURRENT_TIMESTAMP, 300, 3, 1),
       (4, 'Comment 4', 'PLN', 104000, CURRENT_TIMESTAMP, 400, 4, 1),
       (5, 'Comment 5', 'PLN', 105000, CURRENT_TIMESTAMP, 500, 5, 1),
       (6, 'Comment 6', 'PLN', 106000, CURRENT_TIMESTAMP, 600, 6, 1);
-- Inserts for SERVICE_EXPENSE
INSERT INTO SERVICE_EXPENSE (ID, COMMENT, CURRENCY, CURRENT_KILOMETRAGE, DATE, VALUE, CAR_PART_ID, WORKSHOP_ID,
                             EXPLOATATION_REPORT_ID)
VALUES (1, 'Comment 1', 'PLN', 110000, CURRENT_TIMESTAMP, 100, 1, 1, 1),
       (2, 'Comment 2', 'PLN', 120000, CURRENT_TIMESTAMP, 100, 1, 2, 1),
       (3, 'Comment 3', 'PLN', 130000, CURRENT_TIMESTAMP, 100, 1, 3, 1),
       (4, 'Comment 4', 'PLN', 140000, CURRENT_TIMESTAMP, 100, 1, 3, 2),
       (5, 'Comment 5', 'PLN', 150000, CURRENT_TIMESTAMP, 100, 1, 2, 2),
       (6, 'Comment 6', 'PLN', 160000, CURRENT_TIMESTAMP, 100, 1, 1, 2);
-- Inserts for TECHNICAL_EXAMINATION
INSERT INTO TECHNICAL_EXAMINATION (ID, COMMENT, CURRENT_KILOMETRAGE, NEXT_EXAMINATION_DATE, VEHICLE_ID)
VALUES (1, 'Technical examination 1', 100000, CURRENT_TIMESTAMP - interval '1 year', 1),
       (2, 'Technical examination 2', 170000, CURRENT_TIMESTAMP, 1),
       (3, 'Technical examination 3', 230000, CURRENT_TIMESTAMP + interval '1 year', 1),
       (4, 'Technical examination 4', 100000, CURRENT_TIMESTAMP - interval '1 year', 2),
       (5, 'Technical examination 5', 170000, CURRENT_TIMESTAMP, 2),
       (6, 'Technical examination 6', 230000, CURRENT_TIMESTAMP + interval '1 year', 2);
-- Inserts for VEHICLE_OWNER
INSERT INTO VEHICLE_OWNER (ID, FULL_NAME, ID_NUMBER, ADDRESS_ID, VEHICLE_ID)
VALUES (1, 'Owner 1', 'OWN000111000', 10, 1),
       (2, 'Owner 1', 'OWN000222000', 11, 2),
       (3, 'Owner 1', 'OWN000333000', 12, 3),
       (4, 'Owner 1', 'OWN000444000', 13, 4),
       (5, 'Owner 1', 'OWN000555000', 14, 5),
       (6, 'Owner 1', 'OWN000666000', 15, 6),
       (7, 'Owner 1', 'OWN000777000', 16, 7),
       (8, 'Owner 1', 'OWN000888000', 17, 8),
       (9, 'Owner 1', 'OWN000999000', 18, 9),
       (10, 'Owner 10', 'OWN00010100', 19, 10);
-- Updates for VEHICLE
UPDATE VEHICLE
SET EXPLOATATION_REPORT_ID = 1,
    INSURANCE_ID           = 1,
    VEHICLE_OWNER_ID       = 1
WHERE ID = 1;
UPDATE VEHICLE
SET EXPLOATATION_REPORT_ID = 2,
    INSURANCE_ID           = 2,
    VEHICLE_OWNER_ID       = 2
WHERE ID = 2;
UPDATE VEHICLE
SET EXPLOATATION_REPORT_ID = 3,
    INSURANCE_ID           = 3,
    VEHICLE_OWNER_ID       = 3
WHERE ID = 3;
UPDATE VEHICLE
SET EXPLOATATION_REPORT_ID = 4,
    INSURANCE_ID           = 4,
    VEHICLE_OWNER_ID       = 4
WHERE ID = 4;
UPDATE VEHICLE
SET EXPLOATATION_REPORT_ID = 5,
    INSURANCE_ID           = 5,
    VEHICLE_OWNER_ID       = 5
WHERE ID = 5;
UPDATE VEHICLE
SET EXPLOATATION_REPORT_ID = 6,
    INSURANCE_ID           = 6,
    VEHICLE_OWNER_ID       = 6
WHERE ID = 6;
UPDATE VEHICLE
SET EXPLOATATION_REPORT_ID = 7,
    INSURANCE_ID           = 7,
    VEHICLE_OWNER_ID       = 7
WHERE ID = 7;
UPDATE VEHICLE
SET EXPLOATATION_REPORT_ID = 8,
    INSURANCE_ID           = 8,
    VEHICLE_OWNER_ID       = 8
WHERE ID = 8;
UPDATE VEHICLE
SET EXPLOATATION_REPORT_ID = 9,
    INSURANCE_ID           = 9,
    VEHICLE_OWNER_ID       = 9
WHERE ID = 9;
UPDATE VEHICLE
SET EXPLOATATION_REPORT_ID = 10,
    INSURANCE_ID           = 10,
    VEHICLE_OWNER_ID       = 10
WHERE ID = 10;
SELECT setval('address_id_seq', max(id))
FROM address;
SELECT setval('CAR_PART_id_seq', max(id))
FROM CAR_PART;
SELECT setval('REGION_id_seq', max(id))
FROM REGION;
SELECT setval('WORKSHOP_id_seq', max(id))
FROM WORKSHOP;
SELECT setval('DEPARTMENT_id_seq', max(id))
FROM DEPARTMENT;
SELECT setval('EMPLOYEE_id_seq', max(id))
FROM EMPLOYEE;
SELECT setval('ROLE_id_seq', max(id))
FROM ROLE;
SELECT setval('PRIVILEGE_id_seq', max(id))
FROM PRIVILEGE;
SELECT setval('VEHICLE_id_seq', max(id))
FROM VEHICLE;
SELECT setval('EXPLOATATION_REPORT_id_seq', max(id))
FROM EXPLOATATION_REPORT;
SELECT setval('VEHICLE_USAGE_TIMESTAMP_id_seq', max(id))
FROM VEHICLE_USAGE_TIMESTAMP;
SELECT setval('CAR_PART_EXPENSE_id_seq', max(id))
FROM CAR_PART_EXPENSE;
SELECT setval('FUEL_EXPENSE_id_seq', max(id))
FROM FUEL_EXPENSE;
SELECT setval('INSURANCE_id_seq', max(id))
FROM INSURANCE;
SELECT setval('OTHER_EXPENSE_id_seq', max(id))
FROM OTHER_EXPENSE;
SELECT setval('RECOMMENDED_REPAIR_id_seq', max(id))
FROM RECOMMENDED_REPAIR;
SELECT setval('SERVICE_EXPENSE_id_seq', max(id))
FROM SERVICE_EXPENSE;
SELECT setval('TECHNICAL_EXAMINATION_id_seq', max(id))
FROM TECHNICAL_EXAMINATION;
SELECT setval('VEHICLE_OWNER_id_seq', max(id))
FROM VEHICLE_OWNER;
SELECT setval('RECOMMENDED_REPAIR_id_seq', max(id))
FROM RECOMMENDED_REPAIR;

