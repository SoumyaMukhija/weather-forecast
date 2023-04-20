BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "users" (
	"username"	VARCHAR(255) NOT NULL,
	"password"	TEXT NOT NULL,
	"full_name"	VARCHAR(255) NOT NULL,
	PRIMARY KEY("username")
);
CREATE TABLE IF NOT EXISTS "user_analytics" (
	"username"	TEXT,
	"views"	INTEGER,
	PRIMARY KEY("username")
);
CREATE TABLE IF NOT EXISTS "country_analytics" (
	"country"	TEXT,
	"views"	INTEGER,
	PRIMARY KEY("country")
);
CREATE TABLE IF NOT EXISTS "city_analytics" (
	"city"	TEXT,
	"views"	INTEGER,
	PRIMARY KEY("city")
);
INSERT INTO "users" VALUES ('adams1','iRGvAFsE6Vzl8HtTattVSg==','Adrian Adams');
INSERT INTO "users" VALUES ('fbrynn','DGljhpYLD2GRfdIGOKJCGA==','Farrell Brynn');
INSERT INTO "users" VALUES ('cheney','CULWdtubXnSGvdbFHSguFQ==','Brennan Cheney');
INSERT INTO "users" VALUES ('faulkner','4j3G61YqgE6HpzJ3ngtJVg==','Levi Faulkner');
INSERT INTO "users" VALUES ('gerke','Ksi/PH3PLj0NcHaYrZU9kw==','Keira Gerke');
INSERT INTO "users" VALUES ('hillard3','Fw0NOrO0Lr2F6VeuBlAFLg==','Lynzey Hillard');
INSERT INTO "users" VALUES ('klifman','ugj7FelvfUxdxsSUZLLQrQ==','Pheenyx Klifman');
INSERT INTO "users" VALUES ('mccaul1','n8jNAN+6BrosdHvrRyVirQ==','Drew McCaul');
INSERT INTO "users" VALUES ('merritt1','PlcbpsvEGQ/C2RqN+vGcjg==','Addison Merritt');
INSERT INTO "users" VALUES ('omara1','v6MgG4/0ig4T4dTDAkFVoA==','Kroy O''Mara');
COMMIT;
