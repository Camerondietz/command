/* C2 data: the one file every view reads. Edit the records here (a JSON array of MDM records).
   Keep this file local. To publish, encrypt it:  python tools/c2-encrypt.py new   -> mdm-data.enc.js */
window.MDM_DATA = [
 {
  "id": "5d9e5f4b-4af5-5732-81c6-7a4c9e262478",
  "uri": "https://mdm.cameron-dietz.com/id/organization/5d9e5f4b-4af5-5732-81c6-7a4c9e262478",
  "type": "organization",
  "slug": "northstar-holdings",
  "label": "Northstar Holdings",
  "summary": "Parent holding company. Sets capital allocation and portfolio-level goals.",
  "aliases": [
   "NSH"
  ],
  "category": {
   "kind": "holding_company",
   "domain": "finance.capital"
  },
  "data": {
   "callsign": "NSH",
   "echelon": "holding"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "8e35fdbc-e4c7-5306-8902-ec8dfbb0e81f",
  "uri": "https://mdm.cameron-dietz.com/id/organization/8e35fdbc-e4c7-5306-8902-ec8dfbb0e81f",
  "type": "organization",
  "slug": "northstar-logistics",
  "label": "Northstar Logistics",
  "parent_id": "5d9e5f4b-4af5-5732-81c6-7a4c9e262478",
  "summary": "Regional freight and last-mile delivery operation.",
  "aliases": [
   "NSL"
  ],
  "category": {
   "kind": "subsidiary",
   "domain": "logistics"
  },
  "data": {
   "callsign": "NSL",
   "echelon": "subsidiary",
   "ownership_pct": 100
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "50abeb9b-9fc1-536a-a749-f49b559460dd",
  "uri": "https://mdm.cameron-dietz.com/id/organization/50abeb9b-9fc1-536a-a749-f49b559460dd",
  "type": "organization",
  "slug": "northstar-properties",
  "label": "Northstar Properties",
  "parent_id": "5d9e5f4b-4af5-5732-81c6-7a4c9e262478",
  "summary": "Commercial and light-industrial real estate.",
  "aliases": [
   "NSP"
  ],
  "category": {
   "kind": "subsidiary",
   "domain": "real_estate"
  },
  "data": {
   "callsign": "NSP",
   "echelon": "subsidiary",
   "ownership_pct": 100
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "a431021e-6a10-5065-b17d-c7c2e629bea9",
  "uri": "https://mdm.cameron-dietz.com/id/organization/a431021e-6a10-5065-b17d-c7c2e629bea9",
  "type": "organization",
  "slug": "ridgeline-ecg",
  "label": "Ridgeline Emergency Comms Group",
  "summary": "Volunteer emergency communications unit supporting county EOC operations.",
  "aliases": [
   "RECG",
   "Ridgeline"
  ],
  "category": {
   "kind": "volunteer",
   "domain": "emergency_management"
  },
  "data": {
   "callsign": "RECG",
   "echelon": "group"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "adb63725-6df2-505e-8f5c-09a127834571",
  "uri": "https://mdm.cameron-dietz.com/id/person/adb63725-6df2-505e-8f5c-09a127834571",
  "type": "person",
  "slug": "p-avery",
  "label": "Avery Cole",
  "category": {
   "role": "leadership"
  },
  "visibility": "restricted",
  "pii": true,
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "5d9e5f4b-4af5-5732-81c6-7a4c9e262478",
    "label": "Northstar Holdings",
    "primary": true
   }
  ],
  "data": {
   "title": "Principal / CEO",
   "rank": "O-6",
   "callsign": "AVER-RY",
   "email": "avery@example.com"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "088e8143-03eb-53ea-8949-c93ce684ae23",
  "uri": "https://mdm.cameron-dietz.com/id/person/088e8143-03eb-53ea-8949-c93ce684ae23",
  "type": "person",
  "slug": "p-jordan",
  "label": "Jordan Reyes",
  "category": {
   "role": "leadership"
  },
  "visibility": "restricted",
  "pii": true,
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "5d9e5f4b-4af5-5732-81c6-7a4c9e262478",
    "label": "Northstar Holdings",
    "primary": true
   },
   {
    "rel": "reports_to",
    "type": "person",
    "id": "adb63725-6df2-505e-8f5c-09a127834571",
    "label": "Avery Cole",
    "primary": true
   }
  ],
  "data": {
   "title": "Chief of Staff",
   "rank": "O-5",
   "callsign": "JORD-AN",
   "email": "jordan@example.com"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "a57392bf-bffc-5ff7-a703-d4dc88c90c0a",
  "uri": "https://mdm.cameron-dietz.com/id/person/a57392bf-bffc-5ff7-a703-d4dc88c90c0a",
  "type": "person",
  "slug": "p-morgan",
  "label": "Morgan Hale",
  "category": {
   "role": "leadership"
  },
  "visibility": "restricted",
  "pii": true,
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "5d9e5f4b-4af5-5732-81c6-7a4c9e262478",
    "label": "Northstar Holdings",
    "primary": true
   },
   {
    "rel": "reports_to",
    "type": "person",
    "id": "adb63725-6df2-505e-8f5c-09a127834571",
    "label": "Avery Cole",
    "primary": true
   }
  ],
  "data": {
   "title": "CFO",
   "rank": "O-5",
   "callsign": "MORG-AN",
   "email": "morgan@example.com"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "eb4123c4-05b9-577d-abe8-99d24743a85a",
  "uri": "https://mdm.cameron-dietz.com/id/person/eb4123c4-05b9-577d-abe8-99d24743a85a",
  "type": "person",
  "slug": "p-sam",
  "label": "Sam Okafor",
  "category": {
   "role": "leadership"
  },
  "visibility": "restricted",
  "pii": true,
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "8e35fdbc-e4c7-5306-8902-ec8dfbb0e81f",
    "label": "Northstar Logistics",
    "primary": true
   },
   {
    "rel": "reports_to",
    "type": "person",
    "id": "adb63725-6df2-505e-8f5c-09a127834571",
    "label": "Avery Cole",
    "primary": true
   }
  ],
  "data": {
   "title": "President, Logistics",
   "rank": "O-5",
   "callsign": "SAM-AM",
   "email": "sam@example.com"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "cf779c16-d82b-5727-b392-d838cc83dff6",
  "uri": "https://mdm.cameron-dietz.com/id/person/cf779c16-d82b-5727-b392-d838cc83dff6",
  "type": "person",
  "slug": "p-riley",
  "label": "Riley Chen",
  "category": {
   "role": "staff"
  },
  "visibility": "restricted",
  "pii": true,
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "8e35fdbc-e4c7-5306-8902-ec8dfbb0e81f",
    "label": "Northstar Logistics",
    "primary": true
   },
   {
    "rel": "reports_to",
    "type": "person",
    "id": "eb4123c4-05b9-577d-abe8-99d24743a85a",
    "label": "Sam Okafor",
    "primary": true
   }
  ],
  "data": {
   "title": "Fleet Operations Manager",
   "rank": "O-3",
   "callsign": "RILE-EY",
   "email": "riley@example.com"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "130347bd-8e10-50f9-9297-ef7dca08e73b",
  "uri": "https://mdm.cameron-dietz.com/id/person/130347bd-8e10-50f9-9297-ef7dca08e73b",
  "type": "person",
  "slug": "p-casey",
  "label": "Casey Novak",
  "category": {
   "role": "staff"
  },
  "visibility": "restricted",
  "pii": true,
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "8e35fdbc-e4c7-5306-8902-ec8dfbb0e81f",
    "label": "Northstar Logistics",
    "primary": true
   },
   {
    "rel": "reports_to",
    "type": "person",
    "id": "eb4123c4-05b9-577d-abe8-99d24743a85a",
    "label": "Sam Okafor",
    "primary": true
   }
  ],
  "data": {
   "title": "Dispatch Supervisor",
   "rank": "O-2",
   "callsign": "CASE-EY",
   "email": "casey@example.com"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "9aebef1b-5f85-5c09-ad46-ab76ffae40fb",
  "uri": "https://mdm.cameron-dietz.com/id/person/9aebef1b-5f85-5c09-ad46-ab76ffae40fb",
  "type": "person",
  "slug": "p-drew",
  "label": "Drew Patel",
  "category": {
   "role": "staff"
  },
  "visibility": "restricted",
  "pii": true,
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "8e35fdbc-e4c7-5306-8902-ec8dfbb0e81f",
    "label": "Northstar Logistics",
    "primary": true
   },
   {
    "rel": "reports_to",
    "type": "person",
    "id": "130347bd-8e10-50f9-9297-ef7dca08e73b",
    "label": "Casey Novak",
    "primary": true
   }
  ],
  "data": {
   "title": "Senior Dispatcher",
   "rank": "E-6",
   "callsign": "DREW-EW",
   "email": "drew@example.com"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "c9da4b3b-613d-58c7-aa3d-7d11a31b8331",
  "uri": "https://mdm.cameron-dietz.com/id/person/c9da4b3b-613d-58c7-aa3d-7d11a31b8331",
  "type": "person",
  "slug": "p-quinn",
  "label": "Quinn Alvarez",
  "category": {
   "role": "leadership"
  },
  "visibility": "restricted",
  "pii": true,
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "50abeb9b-9fc1-536a-a749-f49b559460dd",
    "label": "Northstar Properties",
    "primary": true
   },
   {
    "rel": "reports_to",
    "type": "person",
    "id": "adb63725-6df2-505e-8f5c-09a127834571",
    "label": "Avery Cole",
    "primary": true
   }
  ],
  "data": {
   "title": "President, Properties",
   "rank": "O-5",
   "callsign": "QUIN-NN",
   "email": "quinn@example.com"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "f455b540-c17d-5948-aac0-ab3b51b22561",
  "uri": "https://mdm.cameron-dietz.com/id/person/f455b540-c17d-5948-aac0-ab3b51b22561",
  "type": "person",
  "slug": "p-taylor",
  "label": "Taylor Brooks",
  "category": {
   "role": "staff"
  },
  "visibility": "restricted",
  "pii": true,
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "50abeb9b-9fc1-536a-a749-f49b559460dd",
    "label": "Northstar Properties",
    "primary": true
   },
   {
    "rel": "reports_to",
    "type": "person",
    "id": "c9da4b3b-613d-58c7-aa3d-7d11a31b8331",
    "label": "Quinn Alvarez",
    "primary": true
   }
  ],
  "data": {
   "title": "Acquisitions Lead",
   "rank": "O-3",
   "callsign": "TAYL-OR",
   "email": "taylor@example.com"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "56ca6341-43cb-56b3-9f9a-f3a197b07d98",
  "uri": "https://mdm.cameron-dietz.com/id/person/56ca6341-43cb-56b3-9f9a-f3a197b07d98",
  "type": "person",
  "slug": "p-jamie",
  "label": "Jamie Ford",
  "category": {
   "role": "staff"
  },
  "visibility": "restricted",
  "pii": true,
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "50abeb9b-9fc1-536a-a749-f49b559460dd",
    "label": "Northstar Properties",
    "primary": true
   },
   {
    "rel": "reports_to",
    "type": "person",
    "id": "c9da4b3b-613d-58c7-aa3d-7d11a31b8331",
    "label": "Quinn Alvarez",
    "primary": true
   }
  ],
  "data": {
   "title": "Facilities Manager",
   "rank": "O-3",
   "callsign": "JAMI-IE",
   "email": "jamie@example.com"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "1fbaa8ac-cd32-56c2-850c-ae9b7bdd687c",
  "uri": "https://mdm.cameron-dietz.com/id/person/1fbaa8ac-cd32-56c2-850c-ae9b7bdd687c",
  "type": "person",
  "slug": "p-kai",
  "label": "Kai Mendez",
  "category": {
   "role": "leadership"
  },
  "visibility": "restricted",
  "pii": true,
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "5d9e5f4b-4af5-5732-81c6-7a4c9e262478",
    "label": "Northstar Holdings",
    "primary": true
   },
   {
    "rel": "reports_to",
    "type": "person",
    "id": "088e8143-03eb-53ea-8949-c93ce684ae23",
    "label": "Jordan Reyes",
    "primary": true
   },
   {
    "rel": "dotted_line_to",
    "type": "person",
    "id": "4e4f1bb5-c9a5-5d37-aa1c-7e708eba2530",
    "label": "Blake Turner"
   }
  ],
  "data": {
   "title": "Director of Technology",
   "rank": "O-4",
   "callsign": "KAI-AI",
   "email": "kai@example.com"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "c93f9396-ca0b-544c-a9e2-31284d4ba420",
  "uri": "https://mdm.cameron-dietz.com/id/person/c93f9396-ca0b-544c-a9e2-31284d4ba420",
  "type": "person",
  "slug": "p-rowan",
  "label": "Rowan Ellis",
  "category": {
   "role": "staff"
  },
  "visibility": "restricted",
  "pii": true,
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "5d9e5f4b-4af5-5732-81c6-7a4c9e262478",
    "label": "Northstar Holdings",
    "primary": true
   },
   {
    "rel": "reports_to",
    "type": "person",
    "id": "1fbaa8ac-cd32-56c2-850c-ae9b7bdd687c",
    "label": "Kai Mendez",
    "primary": true
   },
   {
    "rel": "organization",
    "type": "organization",
    "id": "a431021e-6a10-5065-b17d-c7c2e629bea9",
    "label": "Ridgeline Emergency Comms Group"
   }
  ],
  "data": {
   "title": "Systems Engineer",
   "rank": "E-7",
   "callsign": "ROWA-AN",
   "email": "rowan@example.com"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "4e4f1bb5-c9a5-5d37-aa1c-7e708eba2530",
  "uri": "https://mdm.cameron-dietz.com/id/person/4e4f1bb5-c9a5-5d37-aa1c-7e708eba2530",
  "type": "person",
  "slug": "p-blake",
  "label": "Blake Turner",
  "category": {
   "role": "leadership"
  },
  "visibility": "restricted",
  "pii": true,
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "a431021e-6a10-5065-b17d-c7c2e629bea9",
    "label": "Ridgeline Emergency Comms Group",
    "primary": true
   }
  ],
  "data": {
   "title": "Unit Commander",
   "rank": "O-4",
   "callsign": "BLAK-KE",
   "email": "blake@example.com"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "b86e76a4-c46e-5128-97e5-e3b98adc82ad",
  "uri": "https://mdm.cameron-dietz.com/id/person/b86e76a4-c46e-5128-97e5-e3b98adc82ad",
  "type": "person",
  "slug": "p-skyler",
  "label": "Skyler Grant",
  "category": {
   "role": "staff"
  },
  "visibility": "restricted",
  "pii": true,
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "a431021e-6a10-5065-b17d-c7c2e629bea9",
    "label": "Ridgeline Emergency Comms Group",
    "primary": true
   },
   {
    "rel": "reports_to",
    "type": "person",
    "id": "4e4f1bb5-c9a5-5d37-aa1c-7e708eba2530",
    "label": "Blake Turner",
    "primary": true
   }
  ],
  "data": {
   "title": "Comms Unit Leader",
   "rank": "O-2",
   "callsign": "SKYL-ER",
   "email": "skyler@example.com"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "ec68d2f6-60ab-5e8a-894b-d09df3241a6d",
  "uri": "https://mdm.cameron-dietz.com/id/person/ec68d2f6-60ab-5e8a-894b-d09df3241a6d",
  "type": "person",
  "slug": "p-emerson",
  "label": "Emerson Ward",
  "category": {
   "role": "staff"
  },
  "visibility": "restricted",
  "pii": true,
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "a431021e-6a10-5065-b17d-c7c2e629bea9",
    "label": "Ridgeline Emergency Comms Group",
    "primary": true
   },
   {
    "rel": "reports_to",
    "type": "person",
    "id": "b86e76a4-c46e-5128-97e5-e3b98adc82ad",
    "label": "Skyler Grant",
    "primary": true
   }
  ],
  "data": {
   "title": "Radio Operator",
   "rank": "E-4",
   "callsign": "EMER-ON",
   "email": "emerson@example.com"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "eabd5662-831a-5884-bb2f-a5c91b43016d",
  "uri": "https://mdm.cameron-dietz.com/id/person/eabd5662-831a-5884-bb2f-a5c91b43016d",
  "type": "person",
  "slug": "p-hayden",
  "label": "Hayden Price",
  "category": {
   "role": "staff"
  },
  "visibility": "restricted",
  "pii": true,
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "a431021e-6a10-5065-b17d-c7c2e629bea9",
    "label": "Ridgeline Emergency Comms Group",
    "primary": true
   },
   {
    "rel": "reports_to",
    "type": "person",
    "id": "4e4f1bb5-c9a5-5d37-aa1c-7e708eba2530",
    "label": "Blake Turner",
    "primary": true
   }
  ],
  "data": {
   "title": "Planning Section Chief",
   "rank": "O-3",
   "callsign": "HAYD-EN",
   "email": "hayden@example.com"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "785a3c0f-127e-5b9e-9559-c07a83e42203",
  "uri": "https://mdm.cameron-dietz.com/id/team/785a3c0f-127e-5b9e-9559-c07a83e42203",
  "type": "team",
  "slug": "t-exec",
  "label": "Executive Staff",
  "parent_id": "5d9e5f4b-4af5-5732-81c6-7a4c9e262478",
  "category": {
   "domain": "people.leadership",
   "kind": "line"
  },
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "5d9e5f4b-4af5-5732-81c6-7a4c9e262478",
    "label": "Northstar Holdings",
    "primary": true
   },
   {
    "rel": "lead",
    "type": "person",
    "id": "adb63725-6df2-505e-8f5c-09a127834571",
    "label": "Avery Cole",
    "primary": true
   },
   {
    "rel": "member",
    "type": "person",
    "id": "adb63725-6df2-505e-8f5c-09a127834571",
    "label": "Avery Cole"
   },
   {
    "rel": "member",
    "type": "person",
    "id": "088e8143-03eb-53ea-8949-c93ce684ae23",
    "label": "Jordan Reyes"
   },
   {
    "rel": "member",
    "type": "person",
    "id": "a57392bf-bffc-5ff7-a703-d4dc88c90c0a",
    "label": "Morgan Hale"
   },
   {
    "rel": "member",
    "type": "person",
    "id": "eb4123c4-05b9-577d-abe8-99d24743a85a",
    "label": "Sam Okafor"
   },
   {
    "rel": "member",
    "type": "person",
    "id": "c9da4b3b-613d-58c7-aa3d-7d11a31b8331",
    "label": "Quinn Alvarez"
   }
  ],
  "data": {
   "callsign": "EXECUTIVE-"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "01e7fc0a-75e8-5bb6-9d14-951e5d93c498",
  "uri": "https://mdm.cameron-dietz.com/id/team/01e7fc0a-75e8-5bb6-9d14-951e5d93c498",
  "type": "team",
  "slug": "t-fleet",
  "label": "Fleet Ops",
  "parent_id": "8e35fdbc-e4c7-5306-8902-ec8dfbb0e81f",
  "category": {
   "domain": "logistics.fleet",
   "kind": "line"
  },
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "8e35fdbc-e4c7-5306-8902-ec8dfbb0e81f",
    "label": "Northstar Logistics",
    "primary": true
   },
   {
    "rel": "lead",
    "type": "person",
    "id": "cf779c16-d82b-5727-b392-d838cc83dff6",
    "label": "Riley Chen",
    "primary": true
   },
   {
    "rel": "member",
    "type": "person",
    "id": "cf779c16-d82b-5727-b392-d838cc83dff6",
    "label": "Riley Chen"
   },
   {
    "rel": "member",
    "type": "person",
    "id": "9aebef1b-5f85-5c09-ad46-ab76ffae40fb",
    "label": "Drew Patel"
   }
  ],
  "data": {
   "callsign": "FLEET-OPS"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "6dfdeaec-43ae-5bf7-8f65-adc72de27f26",
  "uri": "https://mdm.cameron-dietz.com/id/team/6dfdeaec-43ae-5bf7-8f65-adc72de27f26",
  "type": "team",
  "slug": "t-dispatch",
  "label": "Dispatch Cell",
  "parent_id": "8e35fdbc-e4c7-5306-8902-ec8dfbb0e81f",
  "category": {
   "domain": "logistics.dispatch",
   "kind": "cross_org"
  },
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "8e35fdbc-e4c7-5306-8902-ec8dfbb0e81f",
    "label": "Northstar Logistics",
    "primary": true
   },
   {
    "rel": "organization",
    "type": "organization",
    "id": "a431021e-6a10-5065-b17d-c7c2e629bea9",
    "label": "Ridgeline Emergency Comms Group"
   },
   {
    "rel": "lead",
    "type": "person",
    "id": "130347bd-8e10-50f9-9297-ef7dca08e73b",
    "label": "Casey Novak",
    "primary": true
   },
   {
    "rel": "member",
    "type": "person",
    "id": "130347bd-8e10-50f9-9297-ef7dca08e73b",
    "label": "Casey Novak"
   },
   {
    "rel": "member",
    "type": "person",
    "id": "9aebef1b-5f85-5c09-ad46-ab76ffae40fb",
    "label": "Drew Patel"
   },
   {
    "rel": "member",
    "type": "person",
    "id": "ec68d2f6-60ab-5e8a-894b-d09df3241a6d",
    "label": "Emerson Ward"
   }
  ],
  "data": {
   "callsign": "DISPATCH-C"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "b64e48eb-9094-5f36-a879-530e60497eb0",
  "uri": "https://mdm.cameron-dietz.com/id/team/b64e48eb-9094-5f36-a879-530e60497eb0",
  "type": "team",
  "slug": "t-acq",
  "label": "Acquisitions",
  "parent_id": "50abeb9b-9fc1-536a-a749-f49b559460dd",
  "category": {
   "domain": "real_estate.acquisition",
   "kind": "line"
  },
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "50abeb9b-9fc1-536a-a749-f49b559460dd",
    "label": "Northstar Properties",
    "primary": true
   },
   {
    "rel": "lead",
    "type": "person",
    "id": "f455b540-c17d-5948-aac0-ab3b51b22561",
    "label": "Taylor Brooks",
    "primary": true
   },
   {
    "rel": "member",
    "type": "person",
    "id": "f455b540-c17d-5948-aac0-ab3b51b22561",
    "label": "Taylor Brooks"
   },
   {
    "rel": "member",
    "type": "person",
    "id": "a57392bf-bffc-5ff7-a703-d4dc88c90c0a",
    "label": "Morgan Hale"
   }
  ],
  "data": {
   "callsign": "ACQUISITIO"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "e84dea47-bf81-5a9b-8457-b4648f7ca5d6",
  "uri": "https://mdm.cameron-dietz.com/id/team/e84dea47-bf81-5a9b-8457-b4648f7ca5d6",
  "type": "team",
  "slug": "t-fac",
  "label": "Facilities",
  "parent_id": "50abeb9b-9fc1-536a-a749-f49b559460dd",
  "category": {
   "domain": "real_estate.facilities",
   "kind": "line"
  },
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "50abeb9b-9fc1-536a-a749-f49b559460dd",
    "label": "Northstar Properties",
    "primary": true
   },
   {
    "rel": "lead",
    "type": "person",
    "id": "56ca6341-43cb-56b3-9f9a-f3a197b07d98",
    "label": "Jamie Ford",
    "primary": true
   },
   {
    "rel": "member",
    "type": "person",
    "id": "56ca6341-43cb-56b3-9f9a-f3a197b07d98",
    "label": "Jamie Ford"
   }
  ],
  "data": {
   "callsign": "FACILITIES"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "d6e3065f-3b44-5a24-a4ac-9ada9e6ae729",
  "uri": "https://mdm.cameron-dietz.com/id/team/d6e3065f-3b44-5a24-a4ac-9ada9e6ae729",
  "type": "team",
  "slug": "t-tech",
  "label": "Tech Ops",
  "parent_id": "5d9e5f4b-4af5-5732-81c6-7a4c9e262478",
  "category": {
   "domain": "technology.infrastructure",
   "kind": "cross_org"
  },
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "5d9e5f4b-4af5-5732-81c6-7a4c9e262478",
    "label": "Northstar Holdings",
    "primary": true
   },
   {
    "rel": "organization",
    "type": "organization",
    "id": "a431021e-6a10-5065-b17d-c7c2e629bea9",
    "label": "Ridgeline Emergency Comms Group"
   },
   {
    "rel": "lead",
    "type": "person",
    "id": "1fbaa8ac-cd32-56c2-850c-ae9b7bdd687c",
    "label": "Kai Mendez",
    "primary": true
   },
   {
    "rel": "member",
    "type": "person",
    "id": "1fbaa8ac-cd32-56c2-850c-ae9b7bdd687c",
    "label": "Kai Mendez"
   },
   {
    "rel": "member",
    "type": "person",
    "id": "c93f9396-ca0b-544c-a9e2-31284d4ba420",
    "label": "Rowan Ellis"
   },
   {
    "rel": "member",
    "type": "person",
    "id": "ec68d2f6-60ab-5e8a-894b-d09df3241a6d",
    "label": "Emerson Ward"
   }
  ],
  "data": {
   "callsign": "TECH-OPS"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "ceba631c-f920-5c22-8814-9305855ed466",
  "uri": "https://mdm.cameron-dietz.com/id/team/ceba631c-f920-5c22-8814-9305855ed466",
  "type": "team",
  "slug": "t-comms",
  "label": "Comms Unit",
  "parent_id": "a431021e-6a10-5065-b17d-c7c2e629bea9",
  "category": {
   "domain": "emergency_management.communications",
   "kind": "line"
  },
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "a431021e-6a10-5065-b17d-c7c2e629bea9",
    "label": "Ridgeline Emergency Comms Group",
    "primary": true
   },
   {
    "rel": "lead",
    "type": "person",
    "id": "b86e76a4-c46e-5128-97e5-e3b98adc82ad",
    "label": "Skyler Grant",
    "primary": true
   },
   {
    "rel": "member",
    "type": "person",
    "id": "b86e76a4-c46e-5128-97e5-e3b98adc82ad",
    "label": "Skyler Grant"
   },
   {
    "rel": "member",
    "type": "person",
    "id": "ec68d2f6-60ab-5e8a-894b-d09df3241a6d",
    "label": "Emerson Ward"
   },
   {
    "rel": "member",
    "type": "person",
    "id": "4e4f1bb5-c9a5-5d37-aa1c-7e708eba2530",
    "label": "Blake Turner"
   },
   {
    "rel": "supports",
    "type": "unit",
    "id": "16899d77-b6a0-5b6e-9851-c8bb33bb4548",
    "label": "Granite Signal Company"
   }
  ],
  "data": {
   "callsign": "COMMS-UNIT"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "1d44b213-4aa5-5465-81cf-d565f2a43e28",
  "uri": "https://mdm.cameron-dietz.com/id/team/1d44b213-4aa5-5465-81cf-d565f2a43e28",
  "type": "team",
  "slug": "t-plans",
  "label": "Planning Section",
  "parent_id": "a431021e-6a10-5065-b17d-c7c2e629bea9",
  "category": {
   "domain": "emergency_management.planning",
   "kind": "line"
  },
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "a431021e-6a10-5065-b17d-c7c2e629bea9",
    "label": "Ridgeline Emergency Comms Group",
    "primary": true
   },
   {
    "rel": "lead",
    "type": "person",
    "id": "eabd5662-831a-5884-bb2f-a5c91b43016d",
    "label": "Hayden Price",
    "primary": true
   },
   {
    "rel": "member",
    "type": "person",
    "id": "eabd5662-831a-5884-bb2f-a5c91b43016d",
    "label": "Hayden Price"
   },
   {
    "rel": "member",
    "type": "person",
    "id": "56ca6341-43cb-56b3-9f9a-f3a197b07d98",
    "label": "Jamie Ford"
   }
  ],
  "data": {
   "callsign": "PLANNING-S"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "ee9f6d7a-d12c-59c3-b408-b8bb0f81d68a",
  "uri": "https://mdm.cameron-dietz.com/id/sop/ee9f6d7a-d12c-59c3-b408-b8bb0f81d68a",
  "type": "sop",
  "slug": "sop-net-activation",
  "label": "Emergency Net Activation",
  "parent_id": "a431021e-6a10-5065-b17d-c7c2e629bea9",
  "summary": "Stand up the county emergency radio net within 30 minutes of EOC activation.",
  "category": {
   "domain": "emergency_management.communications",
   "kind": "procedure",
   "audience": "responder"
  },
  "state": "approved",
  "version": "3.2",
  "review_due": "2026-11-15",
  "owner": {
   "type": "person",
   "id": "b86e76a4-c46e-5128-97e5-e3b98adc82ad",
   "label": "Skyler Grant"
  },
  "relations": [
   {
    "rel": "owning_team",
    "type": "team",
    "id": "ceba631c-f920-5c22-8814-9305855ed466",
    "label": "Comms Unit",
    "primary": true
   },
   {
    "rel": "related",
    "type": "team",
    "id": "6dfdeaec-43ae-5bf7-8f65-adc72de27f26",
    "label": "Dispatch Cell"
   }
  ],
  "data": {
   "trigger": "EOC level 2 or higher, or loss of commercial comms",
   "roles": [
    "Net Control",
    "Relay Station",
    "Liaison"
   ],
   "recurrence": {
    "freq": "monthly",
    "byweekday": "SA",
    "bysetpos": 1,
    "time": "09:00",
    "label": "Monthly net drill"
   },
   "steps": [
    {
     "n": 1,
     "text": "Confirm activation order from EOC duty officer and log time.",
     "role": "Net Control",
     "minutes": 2
    },
    {
     "n": 2,
     "text": "Power primary repeater and verify backup generator auto-start.",
     "role": "Relay Station",
     "minutes": 5
    },
    {
     "n": 3,
     "text": "Open net on primary frequency; announce directed net.",
     "role": "Net Control",
     "minutes": 3
    },
    {
     "n": 4,
     "text": "Roll call all assigned stations; record check-ins on ICS-309.",
     "role": "Net Control",
     "minutes": 10
    },
    {
     "n": 5,
     "text": "Establish liaison link to Dispatch Cell and county EOC.",
     "role": "Liaison",
     "minutes": 5
    },
    {
     "n": 6,
     "text": "Report net status to Planning Section; begin ops period.",
     "role": "Net Control",
     "minutes": 5
    }
   ]
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "7949bd41-69ef-53b2-ba0e-d43f9e6536e6",
  "uri": "https://mdm.cameron-dietz.com/id/sop/7949bd41-69ef-53b2-ba0e-d43f9e6536e6",
  "type": "sop",
  "slug": "sop-vehicle-pm",
  "label": "Fleet Preventive Maintenance",
  "parent_id": "8e35fdbc-e4c7-5306-8902-ec8dfbb0e81f",
  "summary": "Scheduled inspection and service cycle for every tractor and box truck.",
  "category": {
   "domain": "logistics.fleet",
   "kind": "procedure",
   "audience": "technician"
  },
  "state": "approved",
  "version": "2.0",
  "review_due": "2026-09-30",
  "owner": {
   "type": "person",
   "id": "cf779c16-d82b-5727-b392-d838cc83dff6",
   "label": "Riley Chen"
  },
  "relations": [
   {
    "rel": "owning_team",
    "type": "team",
    "id": "01e7fc0a-75e8-5bb6-9d14-951e5d93c498",
    "label": "Fleet Ops",
    "primary": true
   }
  ],
  "data": {
   "trigger": "Every 10,000 mi or 30 days, whichever first",
   "roles": [
    "Technician",
    "Fleet Manager"
   ],
   "recurrence": {
    "freq": "weekly",
    "byday": [
     "MO"
    ],
    "time": "07:00",
    "label": "Weekly PM inspection block"
   },
   "steps": [
    {
     "n": 1,
     "text": "Pull due-list from telematics; tag units out of service.",
     "role": "Fleet Manager",
     "minutes": 15
    },
    {
     "n": 2,
     "text": "Complete DOT pre-trip checklist and tire tread depth.",
     "role": "Technician",
     "minutes": 30
    },
    {
     "n": 3,
     "text": "Fluids, filters, brake adjustment per OEM interval.",
     "role": "Technician",
     "minutes": 90
    },
    {
     "n": 4,
     "text": "Record service in maintenance log and return unit to service.",
     "role": "Fleet Manager",
     "minutes": 10
    }
   ]
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "2c7956c9-0ded-56c0-b228-0d7a3005be51",
  "uri": "https://mdm.cameron-dietz.com/id/sop/2c7956c9-0ded-56c0-b228-0d7a3005be51",
  "type": "sop",
  "slug": "sop-dispatch-handoff",
  "label": "Shift Change Dispatch Handoff",
  "parent_id": "8e35fdbc-e4c7-5306-8902-ec8dfbb0e81f",
  "summary": "Structured handoff between dispatch shifts so no load or incident is dropped.",
  "category": {
   "domain": "logistics.dispatch",
   "kind": "checklist",
   "audience": "dispatcher"
  },
  "state": "approved",
  "version": "1.4",
  "review_due": "2027-01-10",
  "owner": {
   "type": "person",
   "id": "130347bd-8e10-50f9-9297-ef7dca08e73b",
   "label": "Casey Novak"
  },
  "relations": [
   {
    "rel": "owning_team",
    "type": "team",
    "id": "6dfdeaec-43ae-5bf7-8f65-adc72de27f26",
    "label": "Dispatch Cell",
    "primary": true
   },
   {
    "rel": "related",
    "type": "sop",
    "id": "ee9f6d7a-d12c-59c3-b408-b8bb0f81d68a",
    "label": "Emergency Net Activation"
   }
  ],
  "data": {
   "trigger": "Every shift change (06:00 / 18:00)",
   "roles": [
    "Outgoing Dispatcher",
    "Incoming Dispatcher"
   ],
   "recurrence": {
    "freq": "daily",
    "time": "06:00",
    "label": "Shift handoff"
   },
   "steps": [
    {
     "n": 1,
     "text": "Review open loads board and late-risk flags together.",
     "role": "Outgoing Dispatcher",
     "minutes": 5
    },
    {
     "n": 2,
     "text": "Brief active incidents, driver HOS limits and weather.",
     "role": "Outgoing Dispatcher",
     "minutes": 5
    },
    {
     "n": 3,
     "text": "Incoming confirms understanding and signs the log.",
     "role": "Incoming Dispatcher",
     "minutes": 2
    }
   ]
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "b088ba87-c127-50db-8be9-7544ed1d9518",
  "uri": "https://mdm.cameron-dietz.com/id/sop/b088ba87-c127-50db-8be9-7544ed1d9518",
  "type": "sop",
  "slug": "sop-acq-diligence",
  "label": "Property Acquisition Due Diligence",
  "parent_id": "50abeb9b-9fc1-536a-a749-f49b559460dd",
  "summary": "Gate checklist from LOI to close for any property acquisition.",
  "category": {
   "domain": "real_estate.acquisition",
   "kind": "procedure",
   "audience": "analyst"
  },
  "state": "review",
  "version": "1.1",
  "review_due": "2026-12-01",
  "owner": {
   "type": "person",
   "id": "f455b540-c17d-5948-aac0-ab3b51b22561",
   "label": "Taylor Brooks"
  },
  "relations": [
   {
    "rel": "owning_team",
    "type": "team",
    "id": "b64e48eb-9094-5f36-a879-530e60497eb0",
    "label": "Acquisitions",
    "primary": true
   }
  ],
  "data": {
   "trigger": "Signed LOI",
   "roles": [
    "Acquisitions Lead",
    "CFO",
    "Counsel"
   ],
   "steps": [
    {
     "n": 1,
     "text": "Order Phase I environmental and property condition report.",
     "role": "Acquisitions Lead",
     "minutes": 60
    },
    {
     "n": 2,
     "text": "Underwrite rent roll and stress at +200 bps.",
     "role": "CFO",
     "minutes": 240
    },
    {
     "n": 3,
     "text": "Title, survey and zoning review.",
     "role": "Counsel",
     "minutes": 180
    },
    {
     "n": 4,
     "text": "Investment committee go / no-go.",
     "role": "CFO",
     "minutes": 60
    }
   ]
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "8f9ffdb4-102a-5b5c-8ca4-f6c73f0ae11f",
  "uri": "https://mdm.cameron-dietz.com/id/sop/8f9ffdb4-102a-5b5c-8ca4-f6c73f0ae11f",
  "type": "sop",
  "slug": "sop-backup-restore",
  "label": "Data Backup and Restore Test",
  "parent_id": "5d9e5f4b-4af5-5732-81c6-7a4c9e262478",
  "summary": "Verify the MDM store can be restored from offsite backup.",
  "category": {
   "domain": "technology.infrastructure",
   "kind": "procedure",
   "audience": "engineer"
  },
  "state": "approved",
  "version": "1.0",
  "review_due": "2026-10-20",
  "owner": {
   "type": "person",
   "id": "1fbaa8ac-cd32-56c2-850c-ae9b7bdd687c",
   "label": "Kai Mendez"
  },
  "relations": [
   {
    "rel": "owning_team",
    "type": "team",
    "id": "d6e3065f-3b44-5a24-a4ac-9ada9e6ae729",
    "label": "Tech Ops",
    "primary": true
   }
  ],
  "data": {
   "trigger": "Quarterly, and after any schema migration",
   "roles": [
    "Systems Engineer"
   ],
   "recurrence": {
    "freq": "monthly",
    "bymonthday": 15,
    "time": "22:00",
    "label": "Backup restore test"
   },
   "steps": [
    {
     "n": 1,
     "text": "Snapshot production database and record checksum.",
     "role": "Systems Engineer",
     "minutes": 10
    },
    {
     "n": 2,
     "text": "Restore latest offsite backup to staging.",
     "role": "Systems Engineer",
     "minutes": 45
    },
    {
     "n": 3,
     "text": "Compare record counts and checksums; file report.",
     "role": "Systems Engineer",
     "minutes": 20
    }
   ]
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "a55e6a5b-9787-5dfd-9186-08379e39a78f",
  "uri": "https://mdm.cameron-dietz.com/id/goal/a55e6a5b-9787-5dfd-9186-08379e39a78f",
  "type": "goal",
  "slug": "g-revenue",
  "label": "Reach $25M portfolio revenue by FY2028",
  "summary": "Grow combined subsidiary revenue from $14.2M to $25M through fleet expansion and property acquisitions.",
  "category": {
   "domain": "finance.capital",
   "priority": "critical"
  },
  "state": "in_progress",
  "owner": {
   "type": "person",
   "id": "adb63725-6df2-505e-8f5c-09a127834571",
   "label": "Avery Cole"
  },
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "5d9e5f4b-4af5-5732-81c6-7a4c9e262478",
    "label": "Northstar Holdings",
    "primary": true
   }
  ],
  "data": {
   "horizon": "FY2028",
   "target_date": "2028-06-30",
   "kpi": {
    "metric": "Annual revenue",
    "current": 14.2,
    "target": 25,
    "unit": "$M"
   }
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "6ef0dad7-f1ef-56fd-8860-657a193f84f4",
  "uri": "https://mdm.cameron-dietz.com/id/strategy/6ef0dad7-f1ef-56fd-8860-657a193f84f4",
  "type": "strategy",
  "slug": "s-fleet-growth",
  "label": "Expand regional freight capacity",
  "parent_id": "a55e6a5b-9787-5dfd-9186-08379e39a78f",
  "summary": "Add tractors and a second hub to capture contract freight in the I-35 corridor.",
  "category": {
   "domain": "logistics.fleet",
   "priority": "high"
  },
  "state": "in_progress",
  "owner": {
   "type": "person",
   "id": "eb4123c4-05b9-577d-abe8-99d24743a85a",
   "label": "Sam Okafor"
  },
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "8e35fdbc-e4c7-5306-8902-ec8dfbb0e81f",
    "label": "Northstar Logistics",
    "primary": true
   }
  ],
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "47d5587e-2a99-524e-9b07-6b617f08f642",
  "uri": "https://mdm.cameron-dietz.com/id/objective/47d5587e-2a99-524e-9b07-6b617f08f642",
  "type": "objective",
  "slug": "o-hub2",
  "label": "Open Hub 2 (north corridor)",
  "parent_id": "6ef0dad7-f1ef-56fd-8860-657a193f84f4",
  "category": {
   "priority": "high"
  },
  "state": "in_progress",
  "owner": {
   "type": "person",
   "id": "cf779c16-d82b-5727-b392-d838cc83dff6",
   "label": "Riley Chen"
  },
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "01e7fc0a-75e8-5bb6-9d14-951e5d93c498",
    "label": "Fleet Ops",
    "primary": true
   }
  ],
  "data": {
   "target_date": "2026-12-15",
   "kpi": {
    "metric": "Daily outbound loads",
    "current": 0,
    "target": 40,
    "unit": "loads"
   }
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "ac0e5925-a9b9-5c86-b1c8-8e394542f6b4",
  "uri": "https://mdm.cameron-dietz.com/id/task/ac0e5925-a9b9-5c86-b1c8-8e394542f6b4",
  "type": "task",
  "slug": "k-hub2-lease",
  "label": "Execute Hub 2 lease",
  "parent_id": "47d5587e-2a99-524e-9b07-6b617f08f642",
  "category": {
   "priority": "high"
  },
  "state": "done",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "b64e48eb-9094-5f36-a879-530e60497eb0",
    "label": "Acquisitions",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "f455b540-c17d-5948-aac0-ab3b51b22561",
    "label": "Taylor Brooks",
    "primary": true
   }
  ],
  "data": {
   "start": "2026-09-01",
   "due": "2026-09-25",
   "progress": 100,
   "estimate_h": 20
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "2410b4a4-4b61-559a-83a9-86f65b95e81f",
  "uri": "https://mdm.cameron-dietz.com/id/task/2410b4a4-4b61-559a-83a9-86f65b95e81f",
  "type": "task",
  "slug": "k-hub2-buildout",
  "label": "Dock and yard build-out",
  "parent_id": "47d5587e-2a99-524e-9b07-6b617f08f642",
  "category": {
   "priority": "high"
  },
  "state": "in_progress",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "e84dea47-bf81-5a9b-8457-b4648f7ca5d6",
    "label": "Facilities",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "56ca6341-43cb-56b3-9f9a-f3a197b07d98",
    "label": "Jamie Ford",
    "primary": true
   },
   {
    "rel": "depends_on",
    "type": "task",
    "id": "ac0e5925-a9b9-5c86-b1c8-8e394542f6b4",
    "label": "Execute Hub 2 lease"
   }
  ],
  "data": {
   "start": "2026-09-28",
   "due": "2026-11-06",
   "progress": 45,
   "estimate_h": 160
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "66b9bcb1-bc6f-5d8b-9b8f-3d30a032b56c",
  "uri": "https://mdm.cameron-dietz.com/id/task/66b9bcb1-bc6f-5d8b-9b8f-3d30a032b56c",
  "type": "task",
  "slug": "k-hub2-power",
  "label": "Install backup power at Hub 2",
  "parent_id": "2410b4a4-4b61-559a-83a9-86f65b95e81f",
  "category": {
   "priority": "high"
  },
  "state": "blocked",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "e84dea47-bf81-5a9b-8457-b4648f7ca5d6",
    "label": "Facilities",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "56ca6341-43cb-56b3-9f9a-f3a197b07d98",
    "label": "Jamie Ford",
    "primary": true
   }
  ],
  "data": {
   "start": "2026-10-05",
   "due": "2026-10-16",
   "progress": 10,
   "estimate_h": 24,
   "blocker": "Generator delivery slipped; vendor ETA unconfirmed"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "59e68cc2-001b-51a2-8574-36cab69862de",
  "uri": "https://mdm.cameron-dietz.com/id/task/59e68cc2-001b-51a2-8574-36cab69862de",
  "type": "task",
  "slug": "k-hub2-racking",
  "label": "Racking and dock levelers",
  "parent_id": "2410b4a4-4b61-559a-83a9-86f65b95e81f",
  "category": {
   "priority": "medium"
  },
  "state": "in_progress",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "e84dea47-bf81-5a9b-8457-b4648f7ca5d6",
    "label": "Facilities",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "56ca6341-43cb-56b3-9f9a-f3a197b07d98",
    "label": "Jamie Ford",
    "primary": true
   }
  ],
  "data": {
   "start": "2026-10-01",
   "due": "2026-10-24",
   "progress": 60,
   "estimate_h": 40
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "1e9e04d4-3935-52c0-8563-6974fd0dd6ea",
  "uri": "https://mdm.cameron-dietz.com/id/task/1e9e04d4-3935-52c0-8563-6974fd0dd6ea",
  "type": "task",
  "slug": "k-hub2-staff",
  "label": "Hire 6 drivers and 2 dock leads",
  "parent_id": "47d5587e-2a99-524e-9b07-6b617f08f642",
  "category": {
   "domain": "people.recruiting",
   "priority": "high"
  },
  "state": "in_progress",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "01e7fc0a-75e8-5bb6-9d14-951e5d93c498",
    "label": "Fleet Ops",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "cf779c16-d82b-5727-b392-d838cc83dff6",
    "label": "Riley Chen",
    "primary": true
   }
  ],
  "data": {
   "start": "2026-09-15",
   "due": "2026-11-20",
   "progress": 35,
   "estimate_h": 60
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "b7c39206-403e-59d0-be19-810cad2d8bd9",
  "uri": "https://mdm.cameron-dietz.com/id/task/b7c39206-403e-59d0-be19-810cad2d8bd9",
  "type": "task",
  "slug": "k-hub2-golive",
  "label": "Hub 2 go-live readiness review",
  "parent_id": "47d5587e-2a99-524e-9b07-6b617f08f642",
  "category": {
   "priority": "critical"
  },
  "state": "not_started",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "785a3c0f-127e-5b9e-9559-c07a83e42203",
    "label": "Executive Staff",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "eb4123c4-05b9-577d-abe8-99d24743a85a",
    "label": "Sam Okafor",
    "primary": true
   },
   {
    "rel": "depends_on",
    "type": "task",
    "id": "2410b4a4-4b61-559a-83a9-86f65b95e81f",
    "label": "Dock and yard build-out"
   },
   {
    "rel": "depends_on",
    "type": "task",
    "id": "1e9e04d4-3935-52c0-8563-6974fd0dd6ea",
    "label": "Hire 6 drivers and 2 dock leads"
   },
   {
    "rel": "governed_by",
    "type": "sop",
    "id": "2c7956c9-0ded-56c0-b228-0d7a3005be51",
    "label": "Shift Change Dispatch Handoff"
   }
  ],
  "data": {
   "start": "2026-12-08",
   "due": "2026-12-12",
   "progress": 0,
   "estimate_h": 8
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "9d9138aa-084d-5482-86bd-3b66a1718126",
  "uri": "https://mdm.cameron-dietz.com/id/milestone/9d9138aa-084d-5482-86bd-3b66a1718126",
  "type": "milestone",
  "slug": "m-hub2-open",
  "label": "Hub 2 opens",
  "parent_id": "47d5587e-2a99-524e-9b07-6b617f08f642",
  "state": "not_started",
  "data": {
   "date": "2026-12-15"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "6caef8c0-24d8-573f-bb36-7a554f7cde0b",
  "uri": "https://mdm.cameron-dietz.com/id/objective/6caef8c0-24d8-573f-bb36-7a554f7cde0b",
  "type": "objective",
  "slug": "o-fleet-uptime",
  "label": "Fleet availability at 96%",
  "parent_id": "6ef0dad7-f1ef-56fd-8860-657a193f84f4",
  "category": {
   "priority": "medium"
  },
  "state": "at_risk",
  "owner": {
   "type": "person",
   "id": "cf779c16-d82b-5727-b392-d838cc83dff6",
   "label": "Riley Chen"
  },
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "01e7fc0a-75e8-5bb6-9d14-951e5d93c498",
    "label": "Fleet Ops",
    "primary": true
   }
  ],
  "data": {
   "target_date": "2026-12-31",
   "kpi": {
    "metric": "Fleet availability",
    "current": 91.5,
    "target": 96,
    "unit": "%"
   }
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "fc44738c-e0d2-5050-9ec5-c4a20959bede",
  "uri": "https://mdm.cameron-dietz.com/id/task/fc44738c-e0d2-5050-9ec5-c4a20959bede",
  "type": "task",
  "slug": "k-telematics",
  "label": "Roll out telematics PM alerts",
  "parent_id": "6caef8c0-24d8-573f-bb36-7a554f7cde0b",
  "category": {
   "domain": "technology.infrastructure",
   "priority": "medium"
  },
  "state": "in_progress",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "d6e3065f-3b44-5a24-a4ac-9ada9e6ae729",
    "label": "Tech Ops",
    "primary": true
   },
   {
    "rel": "team",
    "type": "team",
    "id": "01e7fc0a-75e8-5bb6-9d14-951e5d93c498",
    "label": "Fleet Ops"
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "c93f9396-ca0b-544c-a9e2-31284d4ba420",
    "label": "Rowan Ellis",
    "primary": true
   },
   {
    "rel": "governed_by",
    "type": "sop",
    "id": "7949bd41-69ef-53b2-ba0e-d43f9e6536e6",
    "label": "Fleet Preventive Maintenance"
   }
  ],
  "data": {
   "start": "2026-09-20",
   "due": "2026-10-10",
   "progress": 70,
   "estimate_h": 30
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "3c780304-df79-5c75-b2cf-1c97d0a86b9e",
  "uri": "https://mdm.cameron-dietz.com/id/task/3c780304-df79-5c75-b2cf-1c97d0a86b9e",
  "type": "task",
  "slug": "k-pm-backlog",
  "label": "Clear PM backlog (11 units)",
  "parent_id": "6caef8c0-24d8-573f-bb36-7a554f7cde0b",
  "category": {
   "priority": "high"
  },
  "state": "in_progress",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "01e7fc0a-75e8-5bb6-9d14-951e5d93c498",
    "label": "Fleet Ops",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "cf779c16-d82b-5727-b392-d838cc83dff6",
    "label": "Riley Chen",
    "primary": true
   },
   {
    "rel": "governed_by",
    "type": "sop",
    "id": "7949bd41-69ef-53b2-ba0e-d43f9e6536e6",
    "label": "Fleet Preventive Maintenance"
   }
  ],
  "data": {
   "start": "2026-09-29",
   "due": "2026-10-03",
   "progress": 55,
   "estimate_h": 44
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "810bc127-22d6-5893-81d5-bc3f796e2574",
  "uri": "https://mdm.cameron-dietz.com/id/task/810bc127-22d6-5893-81d5-bc3f796e2574",
  "type": "task",
  "slug": "k-tractor-order",
  "label": "Place order for 4 tractors",
  "parent_id": "6caef8c0-24d8-573f-bb36-7a554f7cde0b",
  "category": {
   "priority": "medium"
  },
  "state": "not_started",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "785a3c0f-127e-5b9e-9559-c07a83e42203",
    "label": "Executive Staff",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "a57392bf-bffc-5ff7-a703-d4dc88c90c0a",
    "label": "Morgan Hale",
    "primary": true
   },
   {
    "rel": "depends_on",
    "type": "task",
    "id": "fbd85593-4841-5e8a-aab5-744c222731f4",
    "label": "Negotiate term sheet"
   }
  ],
  "data": {
   "start": "2026-10-12",
   "due": "2026-10-30",
   "progress": 0,
   "estimate_h": 6
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "c97a69a4-1739-53a1-98e0-e42bf1a23d8e",
  "uri": "https://mdm.cameron-dietz.com/id/strategy/c97a69a4-1739-53a1-98e0-e42bf1a23d8e",
  "type": "strategy",
  "slug": "s-property",
  "label": "Acquire cash-flowing light-industrial property",
  "parent_id": "a55e6a5b-9787-5dfd-9186-08379e39a78f",
  "summary": "Two acquisitions per year at 7.5%+ cap rate, financed with a revolving credit facility.",
  "category": {
   "domain": "real_estate.acquisition",
   "priority": "high"
  },
  "state": "in_progress",
  "owner": {
   "type": "person",
   "id": "c9da4b3b-613d-58c7-aa3d-7d11a31b8331",
   "label": "Quinn Alvarez"
  },
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "50abeb9b-9fc1-536a-a749-f49b559460dd",
    "label": "Northstar Properties",
    "primary": true
   }
  ],
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "487e82c7-9928-5a22-8859-48aa6b554bd1",
  "uri": "https://mdm.cameron-dietz.com/id/objective/487e82c7-9928-5a22-8859-48aa6b554bd1",
  "type": "objective",
  "slug": "o-credit",
  "label": "Secure $6M acquisition credit facility",
  "parent_id": "c97a69a4-1739-53a1-98e0-e42bf1a23d8e",
  "category": {
   "domain": "finance.capital",
   "priority": "high"
  },
  "state": "in_progress",
  "owner": {
   "type": "person",
   "id": "a57392bf-bffc-5ff7-a703-d4dc88c90c0a",
   "label": "Morgan Hale"
  },
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "785a3c0f-127e-5b9e-9559-c07a83e42203",
    "label": "Executive Staff",
    "primary": true
   }
  ],
  "data": {
   "target_date": "2026-10-31"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "751b1dd8-23dd-583a-9cee-37ee982a483d",
  "uri": "https://mdm.cameron-dietz.com/id/task/751b1dd8-23dd-583a-9cee-37ee982a483d",
  "type": "task",
  "slug": "k-lender-package",
  "label": "Assemble lender package",
  "parent_id": "487e82c7-9928-5a22-8859-48aa6b554bd1",
  "category": {
   "priority": "high"
  },
  "state": "done",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "785a3c0f-127e-5b9e-9559-c07a83e42203",
    "label": "Executive Staff",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "a57392bf-bffc-5ff7-a703-d4dc88c90c0a",
    "label": "Morgan Hale",
    "primary": true
   }
  ],
  "data": {
   "start": "2026-09-01",
   "due": "2026-09-19",
   "progress": 100,
   "estimate_h": 24
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "fbd85593-4841-5e8a-aab5-744c222731f4",
  "uri": "https://mdm.cameron-dietz.com/id/task/fbd85593-4841-5e8a-aab5-744c222731f4",
  "type": "task",
  "slug": "k-credit-line",
  "label": "Negotiate term sheet",
  "parent_id": "487e82c7-9928-5a22-8859-48aa6b554bd1",
  "category": {
   "priority": "critical"
  },
  "state": "in_progress",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "785a3c0f-127e-5b9e-9559-c07a83e42203",
    "label": "Executive Staff",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "a57392bf-bffc-5ff7-a703-d4dc88c90c0a",
    "label": "Morgan Hale",
    "primary": true
   },
   {
    "rel": "depends_on",
    "type": "task",
    "id": "751b1dd8-23dd-583a-9cee-37ee982a483d",
    "label": "Assemble lender package"
   }
  ],
  "data": {
   "start": "2026-09-22",
   "due": "2026-10-09",
   "progress": 65,
   "estimate_h": 16
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "58d6e2d0-efbb-5bb5-80f6-69ea92fa7a7a",
  "uri": "https://mdm.cameron-dietz.com/id/objective/58d6e2d0-efbb-5bb5-80f6-69ea92fa7a7a",
  "type": "objective",
  "slug": "o-acq-q4",
  "label": "Close Ridge Park warehouse",
  "parent_id": "c97a69a4-1739-53a1-98e0-e42bf1a23d8e",
  "category": {
   "priority": "high"
  },
  "state": "not_started",
  "owner": {
   "type": "person",
   "id": "f455b540-c17d-5948-aac0-ab3b51b22561",
   "label": "Taylor Brooks"
  },
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "b64e48eb-9094-5f36-a879-530e60497eb0",
    "label": "Acquisitions",
    "primary": true
   }
  ],
  "data": {
   "target_date": "2026-12-20",
   "kpi": {
    "metric": "Cap rate",
    "current": 0,
    "target": 7.5,
    "unit": "%"
   }
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "fccd35d9-f86a-577d-bfcd-dbfac80cdae7",
  "uri": "https://mdm.cameron-dietz.com/id/task/fccd35d9-f86a-577d-bfcd-dbfac80cdae7",
  "type": "task",
  "slug": "k-ridge-loi",
  "label": "Sign LOI on Ridge Park",
  "parent_id": "58d6e2d0-efbb-5bb5-80f6-69ea92fa7a7a",
  "category": {
   "priority": "high"
  },
  "state": "in_progress",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "b64e48eb-9094-5f36-a879-530e60497eb0",
    "label": "Acquisitions",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "f455b540-c17d-5948-aac0-ab3b51b22561",
    "label": "Taylor Brooks",
    "primary": true
   }
  ],
  "data": {
   "start": "2026-10-05",
   "due": "2026-10-14",
   "progress": 40,
   "estimate_h": 8
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "1ec63475-fada-5d5a-b89e-3199d1926e8a",
  "uri": "https://mdm.cameron-dietz.com/id/task/1ec63475-fada-5d5a-b89e-3199d1926e8a",
  "type": "task",
  "slug": "k-ridge-dd",
  "label": "Run due diligence",
  "parent_id": "58d6e2d0-efbb-5bb5-80f6-69ea92fa7a7a",
  "category": {
   "priority": "high"
  },
  "state": "not_started",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "b64e48eb-9094-5f36-a879-530e60497eb0",
    "label": "Acquisitions",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "f455b540-c17d-5948-aac0-ab3b51b22561",
    "label": "Taylor Brooks",
    "primary": true
   },
   {
    "rel": "depends_on",
    "type": "task",
    "id": "fccd35d9-f86a-577d-bfcd-dbfac80cdae7",
    "label": "Sign LOI on Ridge Park"
   },
   {
    "rel": "depends_on",
    "type": "task",
    "id": "fbd85593-4841-5e8a-aab5-744c222731f4",
    "label": "Negotiate term sheet"
   },
   {
    "rel": "governed_by",
    "type": "sop",
    "id": "b088ba87-c127-50db-8be9-7544ed1d9518",
    "label": "Property Acquisition Due Diligence"
   }
  ],
  "data": {
   "start": "2026-10-15",
   "due": "2026-11-25",
   "progress": 0,
   "estimate_h": 80
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "d5cc27f3-18ee-5295-ad21-ba10d854598b",
  "uri": "https://mdm.cameron-dietz.com/id/milestone/d5cc27f3-18ee-5295-ad21-ba10d854598b",
  "type": "milestone",
  "slug": "m-ridge-close",
  "label": "Ridge Park closing",
  "parent_id": "58d6e2d0-efbb-5bb5-80f6-69ea92fa7a7a",
  "state": "not_started",
  "data": {
   "date": "2026-12-18"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "7ecd40e1-c2c8-58e9-8db7-5d0423eea8ba",
  "uri": "https://mdm.cameron-dietz.com/id/goal/7ecd40e1-c2c8-58e9-8db7-5d0423eea8ba",
  "type": "goal",
  "slug": "g-resilience",
  "label": "72-hour self-sufficient operations",
  "summary": "Every critical site and the comms net can run 72 hours with no grid, internet or resupply.",
  "category": {
   "domain": "emergency_management.planning",
   "priority": "high"
  },
  "state": "in_progress",
  "owner": {
   "type": "person",
   "id": "4e4f1bb5-c9a5-5d37-aa1c-7e708eba2530",
   "label": "Blake Turner"
  },
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "a431021e-6a10-5065-b17d-c7c2e629bea9",
    "label": "Ridgeline Emergency Comms Group",
    "primary": true
   }
  ],
  "data": {
   "horizon": "2027",
   "target_date": "2027-06-01"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "8aae214f-577b-5a8a-9a39-6d35629079da",
  "uri": "https://mdm.cameron-dietz.com/id/strategy/8aae214f-577b-5a8a-9a39-6d35629079da",
  "type": "strategy",
  "slug": "s-comms-backbone",
  "label": "Hardened comms backbone",
  "parent_id": "7ecd40e1-c2c8-58e9-8db7-5d0423eea8ba",
  "category": {
   "domain": "emergency_management.communications",
   "priority": "high"
  },
  "state": "in_progress",
  "owner": {
   "type": "person",
   "id": "b86e76a4-c46e-5128-97e5-e3b98adc82ad",
   "label": "Skyler Grant"
  },
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "ceba631c-f920-5c22-8814-9305855ed466",
    "label": "Comms Unit",
    "primary": true
   }
  ],
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "431400d4-2b6e-59f1-a18c-897adee7b8ca",
  "uri": "https://mdm.cameron-dietz.com/id/objective/431400d4-2b6e-59f1-a18c-897adee7b8ca",
  "type": "objective",
  "slug": "o-repeater",
  "label": "Second repeater site on solar",
  "parent_id": "8aae214f-577b-5a8a-9a39-6d35629079da",
  "category": {
   "priority": "high"
  },
  "state": "in_progress",
  "owner": {
   "type": "person",
   "id": "b86e76a4-c46e-5128-97e5-e3b98adc82ad",
   "label": "Skyler Grant"
  },
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "ceba631c-f920-5c22-8814-9305855ed466",
    "label": "Comms Unit",
    "primary": true
   },
   {
    "rel": "team",
    "type": "team",
    "id": "d6e3065f-3b44-5a24-a4ac-9ada9e6ae729",
    "label": "Tech Ops"
   }
  ],
  "data": {
   "target_date": "2026-11-30",
   "kpi": {
    "metric": "Coverage of county",
    "current": 68,
    "target": 90,
    "unit": "%"
   }
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "10cd8635-f0d5-552d-885a-0174a87870c7",
  "uri": "https://mdm.cameron-dietz.com/id/task/10cd8635-f0d5-552d-885a-0174a87870c7",
  "type": "task",
  "slug": "k-site-survey",
  "label": "RF site survey at Hub 2 roof",
  "parent_id": "431400d4-2b6e-59f1-a18c-897adee7b8ca",
  "category": {
   "priority": "medium"
  },
  "state": "done",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "ceba631c-f920-5c22-8814-9305855ed466",
    "label": "Comms Unit",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "ec68d2f6-60ab-5e8a-894b-d09df3241a6d",
    "label": "Emerson Ward",
    "primary": true
   },
   {
    "rel": "related",
    "type": "objective",
    "id": "47d5587e-2a99-524e-9b07-6b617f08f642",
    "label": "Open Hub 2 (north corridor)"
   }
  ],
  "data": {
   "start": "2026-09-10",
   "due": "2026-09-20",
   "progress": 100,
   "estimate_h": 6
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "0516b227-ede3-52d7-9f32-9233260a1d7d",
  "uri": "https://mdm.cameron-dietz.com/id/task/0516b227-ede3-52d7-9f32-9233260a1d7d",
  "type": "task",
  "slug": "k-solar-kit",
  "label": "Procure solar and battery kit",
  "parent_id": "431400d4-2b6e-59f1-a18c-897adee7b8ca",
  "category": {
   "priority": "high"
  },
  "state": "in_progress",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "d6e3065f-3b44-5a24-a4ac-9ada9e6ae729",
    "label": "Tech Ops",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "c93f9396-ca0b-544c-a9e2-31284d4ba420",
    "label": "Rowan Ellis",
    "primary": true
   }
  ],
  "data": {
   "start": "2026-09-25",
   "due": "2026-10-08",
   "progress": 80,
   "estimate_h": 10
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "d1a58c72-0b83-5051-8351-88720af98bc0",
  "uri": "https://mdm.cameron-dietz.com/id/task/d1a58c72-0b83-5051-8351-88720af98bc0",
  "type": "task",
  "slug": "k-repeater-install",
  "label": "Install and tune repeater",
  "parent_id": "431400d4-2b6e-59f1-a18c-897adee7b8ca",
  "category": {
   "priority": "high"
  },
  "state": "not_started",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "ceba631c-f920-5c22-8814-9305855ed466",
    "label": "Comms Unit",
    "primary": true
   },
   {
    "rel": "team",
    "type": "team",
    "id": "d6e3065f-3b44-5a24-a4ac-9ada9e6ae729",
    "label": "Tech Ops"
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "ec68d2f6-60ab-5e8a-894b-d09df3241a6d",
    "label": "Emerson Ward",
    "primary": true
   },
   {
    "rel": "depends_on",
    "type": "task",
    "id": "0516b227-ede3-52d7-9f32-9233260a1d7d",
    "label": "Procure solar and battery kit"
   },
   {
    "rel": "depends_on",
    "type": "task",
    "id": "66b9bcb1-bc6f-5d8b-9b8f-3d30a032b56c",
    "label": "Install backup power at Hub 2"
   },
   {
    "rel": "depends_on",
    "type": "task",
    "id": "10cd8635-f0d5-552d-885a-0174a87870c7",
    "label": "RF site survey at Hub 2 roof"
   }
  ],
  "data": {
   "start": "2026-10-20",
   "due": "2026-11-14",
   "progress": 0,
   "estimate_h": 32
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "2ff12e98-294c-51f5-8a18-b5825d9a0119",
  "uri": "https://mdm.cameron-dietz.com/id/objective/2ff12e98-294c-51f5-8a18-b5825d9a0119",
  "type": "objective",
  "slug": "o-net-drills",
  "label": "Monthly net drills at 90% check-in",
  "parent_id": "8aae214f-577b-5a8a-9a39-6d35629079da",
  "category": {
   "priority": "medium"
  },
  "state": "in_progress",
  "owner": {
   "type": "person",
   "id": "b86e76a4-c46e-5128-97e5-e3b98adc82ad",
   "label": "Skyler Grant"
  },
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "ceba631c-f920-5c22-8814-9305855ed466",
    "label": "Comms Unit",
    "primary": true
   }
  ],
  "data": {
   "target_date": "2027-03-31",
   "kpi": {
    "metric": "Check-in rate",
    "current": 78,
    "target": 90,
    "unit": "%"
   }
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "36744058-0452-5049-b9b4-088b1924ffa0",
  "uri": "https://mdm.cameron-dietz.com/id/task/36744058-0452-5049-b9b4-088b1924ffa0",
  "type": "task",
  "slug": "k-oct-drill",
  "label": "Run October net drill",
  "parent_id": "2ff12e98-294c-51f5-8a18-b5825d9a0119",
  "category": {
   "priority": "medium"
  },
  "state": "not_started",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "ceba631c-f920-5c22-8814-9305855ed466",
    "label": "Comms Unit",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "b86e76a4-c46e-5128-97e5-e3b98adc82ad",
    "label": "Skyler Grant",
    "primary": true
   },
   {
    "rel": "governed_by",
    "type": "sop",
    "id": "ee9f6d7a-d12c-59c3-b408-b8bb0f81d68a",
    "label": "Emergency Net Activation"
   }
  ],
  "data": {
   "start": "2026-10-03",
   "due": "2026-10-03",
   "progress": 0,
   "estimate_h": 3
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "5031ec95-3c96-53b4-a35c-e2a64c461fbd",
  "uri": "https://mdm.cameron-dietz.com/id/task/5031ec95-3c96-53b4-a35c-e2a64c461fbd",
  "type": "task",
  "slug": "k-roster",
  "label": "Update operator roster and contact tree",
  "parent_id": "2ff12e98-294c-51f5-8a18-b5825d9a0119",
  "category": {
   "priority": "low"
  },
  "state": "in_progress",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "1d44b213-4aa5-5465-81cf-d565f2a43e28",
    "label": "Planning Section",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "eabd5662-831a-5884-bb2f-a5c91b43016d",
    "label": "Hayden Price",
    "primary": true
   }
  ],
  "data": {
   "start": "2026-10-01",
   "due": "2026-10-17",
   "progress": 30,
   "estimate_h": 4
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "2c897304-25a6-5096-a3e7-891267ec42e5",
  "uri": "https://mdm.cameron-dietz.com/id/strategy/2c897304-25a6-5096-a3e7-891267ec42e5",
  "type": "strategy",
  "slug": "s-site-power",
  "label": "Backup power at every critical site",
  "parent_id": "7ecd40e1-c2c8-58e9-8db7-5d0423eea8ba",
  "summary": "Generators plus 72 hours of fuel at Hub 1, Hub 2, HQ and the repeater sites.",
  "category": {
   "domain": "emergency_management.planning",
   "priority": "high"
  },
  "state": "at_risk",
  "owner": {
   "type": "person",
   "id": "eabd5662-831a-5884-bb2f-a5c91b43016d",
   "label": "Hayden Price"
  },
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "1d44b213-4aa5-5465-81cf-d565f2a43e28",
    "label": "Planning Section",
    "primary": true
   },
   {
    "rel": "supports",
    "type": "goal",
    "id": "a55e6a5b-9787-5dfd-9186-08379e39a78f",
    "label": "Reach $25M portfolio revenue by FY2028"
   }
  ],
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "5a3fcd9b-93ba-59bf-900c-124aa9706ac3",
  "uri": "https://mdm.cameron-dietz.com/id/objective/5a3fcd9b-93ba-59bf-900c-124aa9706ac3",
  "type": "objective",
  "slug": "o-fuel",
  "label": "72h fuel reserve at all sites",
  "parent_id": "2c897304-25a6-5096-a3e7-891267ec42e5",
  "category": {
   "priority": "high"
  },
  "state": "at_risk",
  "owner": {
   "type": "person",
   "id": "56ca6341-43cb-56b3-9f9a-f3a197b07d98",
   "label": "Jamie Ford"
  },
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "1d44b213-4aa5-5465-81cf-d565f2a43e28",
    "label": "Planning Section",
    "primary": true
   },
   {
    "rel": "team",
    "type": "team",
    "id": "e84dea47-bf81-5a9b-8457-b4648f7ca5d6",
    "label": "Facilities"
   }
  ],
  "data": {
   "target_date": "2026-12-01",
   "kpi": {
    "metric": "Sites at 72h",
    "current": 1,
    "target": 4,
    "unit": "sites"
   }
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "9cf437ba-97db-5818-93b6-8ca3e5c898b5",
  "uri": "https://mdm.cameron-dietz.com/id/task/9cf437ba-97db-5818-93b6-8ca3e5c898b5",
  "type": "task",
  "slug": "k-fuel-contract",
  "label": "Sign priority fuel delivery contract",
  "parent_id": "5a3fcd9b-93ba-59bf-900c-124aa9706ac3",
  "category": {
   "priority": "high"
  },
  "state": "not_started",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "e84dea47-bf81-5a9b-8457-b4648f7ca5d6",
    "label": "Facilities",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "56ca6341-43cb-56b3-9f9a-f3a197b07d98",
    "label": "Jamie Ford",
    "primary": true
   }
  ],
  "data": {
   "start": "2026-10-06",
   "due": "2026-10-13",
   "progress": 0,
   "estimate_h": 6
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "56e197fa-5e72-54bb-b938-99719ae4d605",
  "uri": "https://mdm.cameron-dietz.com/id/task/56e197fa-5e72-54bb-b938-99719ae4d605",
  "type": "task",
  "slug": "k-fuel-tanks",
  "label": "Install day tanks at HQ and Hub 1",
  "parent_id": "5a3fcd9b-93ba-59bf-900c-124aa9706ac3",
  "category": {
   "priority": "medium"
  },
  "state": "not_started",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "e84dea47-bf81-5a9b-8457-b4648f7ca5d6",
    "label": "Facilities",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "56ca6341-43cb-56b3-9f9a-f3a197b07d98",
    "label": "Jamie Ford",
    "primary": true
   },
   {
    "rel": "depends_on",
    "type": "task",
    "id": "9cf437ba-97db-5818-93b6-8ca3e5c898b5",
    "label": "Sign priority fuel delivery contract"
   }
  ],
  "data": {
   "start": "2026-10-19",
   "due": "2026-11-20",
   "progress": 0,
   "estimate_h": 40
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "42083b26-2ce9-5723-b913-ab331d92d0b1",
  "uri": "https://mdm.cameron-dietz.com/id/task/42083b26-2ce9-5723-b913-ab331d92d0b1",
  "type": "task",
  "slug": "k-coop-plan",
  "label": "Write continuity-of-operations plan",
  "parent_id": "2c897304-25a6-5096-a3e7-891267ec42e5",
  "category": {
   "priority": "medium"
  },
  "state": "in_progress",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "1d44b213-4aa5-5465-81cf-d565f2a43e28",
    "label": "Planning Section",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "eabd5662-831a-5884-bb2f-a5c91b43016d",
    "label": "Hayden Price",
    "primary": true
   }
  ],
  "data": {
   "start": "2026-09-15",
   "due": "2026-10-31",
   "progress": 50,
   "estimate_h": 24
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "bbb73cb3-6f13-5533-a04c-219d841a8d91",
  "uri": "https://mdm.cameron-dietz.com/id/goal/bbb73cb3-6f13-5533-a04c-219d841a8d91",
  "type": "goal",
  "slug": "g-c2",
  "label": "Unified command and control platform",
  "summary": "One MDM-backed system for goals, tasks, SOPs, people and assets across every organization.",
  "category": {
   "domain": "technology.infrastructure",
   "priority": "high"
  },
  "state": "in_progress",
  "owner": {
   "type": "person",
   "id": "088e8143-03eb-53ea-8949-c93ce684ae23",
   "label": "Jordan Reyes"
  },
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "5d9e5f4b-4af5-5732-81c6-7a4c9e262478",
    "label": "Northstar Holdings",
    "primary": true
   }
  ],
  "data": {
   "horizon": "2027",
   "target_date": "2027-03-31"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "98a7c26d-ecf5-57cb-a569-d5f6ecd1b468",
  "uri": "https://mdm.cameron-dietz.com/id/strategy/98a7c26d-ecf5-57cb-a569-d5f6ecd1b468",
  "type": "strategy",
  "slug": "s-mdm",
  "label": "Stand up the MDM backbone",
  "parent_id": "bbb73cb3-6f13-5533-a04c-219d841a8d91",
  "category": {
   "priority": "high"
  },
  "state": "in_progress",
  "owner": {
   "type": "person",
   "id": "1fbaa8ac-cd32-56c2-850c-ae9b7bdd687c",
   "label": "Kai Mendez"
  },
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "d6e3065f-3b44-5a24-a4ac-9ada9e6ae729",
    "label": "Tech Ops",
    "primary": true
   }
  ],
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "9ea4e4ab-6c8d-5561-b1ce-4d8ff8bf4e07",
  "uri": "https://mdm.cameron-dietz.com/id/objective/9ea4e4ab-6c8d-5561-b1ce-4d8ff8bf4e07",
  "type": "objective",
  "slug": "o-mdm-api",
  "label": "Record API live with schema validation",
  "parent_id": "98a7c26d-ecf5-57cb-a569-d5f6ecd1b468",
  "category": {
   "priority": "high"
  },
  "state": "in_progress",
  "owner": {
   "type": "person",
   "id": "1fbaa8ac-cd32-56c2-850c-ae9b7bdd687c",
   "label": "Kai Mendez"
  },
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "d6e3065f-3b44-5a24-a4ac-9ada9e6ae729",
    "label": "Tech Ops",
    "primary": true
   }
  ],
  "data": {
   "target_date": "2026-11-15"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "027f76e1-d111-5774-b007-341475137abb",
  "uri": "https://mdm.cameron-dietz.com/id/task/027f76e1-d111-5774-b007-341475137abb",
  "type": "task",
  "slug": "k-schema",
  "label": "Finalize record envelope schema",
  "parent_id": "9ea4e4ab-6c8d-5561-b1ce-4d8ff8bf4e07",
  "category": {
   "priority": "high"
  },
  "state": "done",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "d6e3065f-3b44-5a24-a4ac-9ada9e6ae729",
    "label": "Tech Ops",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "1fbaa8ac-cd32-56c2-850c-ae9b7bdd687c",
    "label": "Kai Mendez",
    "primary": true
   }
  ],
  "data": {
   "start": "2026-09-01",
   "due": "2026-09-30",
   "progress": 100,
   "estimate_h": 20
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "760a54e1-38b3-523f-8884-6fe58f115c05",
  "uri": "https://mdm.cameron-dietz.com/id/task/760a54e1-38b3-523f-8884-6fe58f115c05",
  "type": "task",
  "slug": "k-api",
  "label": "Build CRUD API and validator",
  "parent_id": "9ea4e4ab-6c8d-5561-b1ce-4d8ff8bf4e07",
  "category": {
   "priority": "high"
  },
  "state": "in_progress",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "d6e3065f-3b44-5a24-a4ac-9ada9e6ae729",
    "label": "Tech Ops",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "c93f9396-ca0b-544c-a9e2-31284d4ba420",
    "label": "Rowan Ellis",
    "primary": true
   },
   {
    "rel": "depends_on",
    "type": "task",
    "id": "027f76e1-d111-5774-b007-341475137abb",
    "label": "Finalize record envelope schema"
   }
  ],
  "data": {
   "start": "2026-10-01",
   "due": "2026-10-30",
   "progress": 25,
   "estimate_h": 60
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "32a8b329-a0fe-5125-8b99-1d38240f4fc6",
  "uri": "https://mdm.cameron-dietz.com/id/task/32a8b329-a0fe-5125-8b99-1d38240f4fc6",
  "type": "task",
  "slug": "k-backup",
  "label": "Automate offsite backups",
  "parent_id": "9ea4e4ab-6c8d-5561-b1ce-4d8ff8bf4e07",
  "category": {
   "priority": "medium"
  },
  "state": "not_started",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "d6e3065f-3b44-5a24-a4ac-9ada9e6ae729",
    "label": "Tech Ops",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "c93f9396-ca0b-544c-a9e2-31284d4ba420",
    "label": "Rowan Ellis",
    "primary": true
   },
   {
    "rel": "depends_on",
    "type": "task",
    "id": "760a54e1-38b3-523f-8884-6fe58f115c05",
    "label": "Build CRUD API and validator"
   },
   {
    "rel": "governed_by",
    "type": "sop",
    "id": "8f9ffdb4-102a-5b5c-8ca4-f6c73f0ae11f",
    "label": "Data Backup and Restore Test"
   }
  ],
  "data": {
   "start": "2026-10-26",
   "due": "2026-11-06",
   "progress": 0,
   "estimate_h": 12
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "d79d3ed1-1b96-5c5c-83ef-5b72533b072e",
  "uri": "https://mdm.cameron-dietz.com/id/objective/d79d3ed1-1b96-5c5c-83ef-5b72533b072e",
  "type": "objective",
  "slug": "o-views",
  "label": "C2 views in daily use by all leads",
  "parent_id": "98a7c26d-ecf5-57cb-a569-d5f6ecd1b468",
  "category": {
   "priority": "medium"
  },
  "state": "in_progress",
  "owner": {
   "type": "person",
   "id": "088e8143-03eb-53ea-8949-c93ce684ae23",
   "label": "Jordan Reyes"
  },
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "d6e3065f-3b44-5a24-a4ac-9ada9e6ae729",
    "label": "Tech Ops",
    "primary": true
   },
   {
    "rel": "supports",
    "type": "goal",
    "id": "7ecd40e1-c2c8-58e9-8db7-5d0423eea8ba",
    "label": "72-hour self-sufficient operations"
   }
  ],
  "data": {
   "target_date": "2026-12-31",
   "kpi": {
    "metric": "Weekly active leads",
    "current": 2,
    "target": 12,
    "unit": "users"
   }
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "783d1dc7-555e-57cc-a64e-b7d275b2feb5",
  "uri": "https://mdm.cameron-dietz.com/id/task/783d1dc7-555e-57cc-a64e-b7d275b2feb5",
  "type": "task",
  "slug": "k-views-proto",
  "label": "Prototype strategy map, queue and schedule",
  "parent_id": "d79d3ed1-1b96-5c5c-83ef-5b72533b072e",
  "category": {
   "priority": "high"
  },
  "state": "in_progress",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "d6e3065f-3b44-5a24-a4ac-9ada9e6ae729",
    "label": "Tech Ops",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "1fbaa8ac-cd32-56c2-850c-ae9b7bdd687c",
    "label": "Kai Mendez",
    "primary": true
   }
  ],
  "data": {
   "start": "2026-10-05",
   "due": "2026-10-09",
   "progress": 60,
   "estimate_h": 16
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "d9bb10ef-573f-506f-955c-581ed74503ee",
  "uri": "https://mdm.cameron-dietz.com/id/task/d9bb10ef-573f-506f-955c-581ed74503ee",
  "type": "task",
  "slug": "k-views-backend",
  "label": "Wire views to backend fetch",
  "parent_id": "d79d3ed1-1b96-5c5c-83ef-5b72533b072e",
  "category": {
   "priority": "medium"
  },
  "state": "not_started",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "d6e3065f-3b44-5a24-a4ac-9ada9e6ae729",
    "label": "Tech Ops",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "c93f9396-ca0b-544c-a9e2-31284d4ba420",
    "label": "Rowan Ellis",
    "primary": true
   },
   {
    "rel": "depends_on",
    "type": "task",
    "id": "760a54e1-38b3-523f-8884-6fe58f115c05",
    "label": "Build CRUD API and validator"
   },
   {
    "rel": "depends_on",
    "type": "task",
    "id": "783d1dc7-555e-57cc-a64e-b7d275b2feb5",
    "label": "Prototype strategy map, queue and schedule"
   }
  ],
  "data": {
   "start": "2026-11-02",
   "due": "2026-11-20",
   "progress": 0,
   "estimate_h": 24
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "cd24aab0-6fb6-5296-93c5-a57fd92a5b66",
  "uri": "https://mdm.cameron-dietz.com/id/task/cd24aab0-6fb6-5296-93c5-a57fd92a5b66",
  "type": "task",
  "slug": "k-onboard-leads",
  "label": "Onboard all team leads",
  "parent_id": "d79d3ed1-1b96-5c5c-83ef-5b72533b072e",
  "category": {
   "priority": "medium"
  },
  "state": "not_started",
  "relations": [
   {
    "rel": "team",
    "type": "team",
    "id": "785a3c0f-127e-5b9e-9559-c07a83e42203",
    "label": "Executive Staff",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "088e8143-03eb-53ea-8949-c93ce684ae23",
    "label": "Jordan Reyes",
    "primary": true
   },
   {
    "rel": "depends_on",
    "type": "task",
    "id": "d9bb10ef-573f-506f-955c-581ed74503ee",
    "label": "Wire views to backend fetch"
   }
  ],
  "data": {
   "start": "2026-11-23",
   "due": "2026-12-18",
   "progress": 0,
   "estimate_h": 12,
   "recurrence": {
    "freq": "weekly",
    "byday": [
     "TH"
    ],
    "time": "15:00",
    "label": "Lead onboarding session",
    "until": "2026-12-18"
   }
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "5b20c62b-c37e-5ba8-8ceb-045c942fd02d",
  "uri": "https://mdm.cameron-dietz.com/id/event/5b20c62b-c37e-5ba8-8ceb-045c942fd02d",
  "type": "event",
  "slug": "e-weekly-sync",
  "label": "Weekly command sync",
  "parent_id": "5d9e5f4b-4af5-5732-81c6-7a4c9e262478",
  "category": {
   "domain": "people.leadership",
   "kind": "meeting"
  },
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "5d9e5f4b-4af5-5732-81c6-7a4c9e262478",
    "label": "Northstar Holdings",
    "primary": true
   },
   {
    "rel": "team",
    "type": "team",
    "id": "785a3c0f-127e-5b9e-9559-c07a83e42203",
    "label": "Executive Staff",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "088e8143-03eb-53ea-8949-c93ce684ae23",
    "label": "Jordan Reyes",
    "primary": true
   }
  ],
  "data": {
   "start": "2026-09-07",
   "recurrence": {
    "freq": "weekly",
    "byday": [
     "MO"
    ],
    "time": "08:30",
    "label": "Weekly command sync"
   },
   "duration_min": 45
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "2b49f254-e8e5-5595-9938-c10c38a60f50",
  "uri": "https://mdm.cameron-dietz.com/id/unit/2b49f254-e8e5-5595-9938-c10c38a60f50",
  "type": "unit",
  "slug": "u-nsh-corp",
  "label": "Corporate Services",
  "parent_id": "5d9e5f4b-4af5-5732-81c6-7a4c9e262478",
  "category": {
   "kind": "shared_services"
  },
  "data": {
   "echelon": "division",
   "callsign": "CORP",
   "order": 1
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "ec5a7ecc-4378-59d2-95a1-1ae4efde8004",
  "uri": "https://mdm.cameron-dietz.com/id/unit/ec5a7ecc-4378-59d2-95a1-1ae4efde8004",
  "type": "unit",
  "slug": "u-nsh-fin",
  "label": "Finance",
  "parent_id": "2b49f254-e8e5-5595-9938-c10c38a60f50",
  "category": {
   "kind": "department"
  },
  "relations": [
   {
    "rel": "head",
    "type": "person",
    "id": "a57392bf-bffc-5ff7-a703-d4dc88c90c0a",
    "label": "Morgan Hale",
    "primary": true
   }
  ],
  "data": {
   "echelon": "department",
   "callsign": "FIN",
   "headcount": 6,
   "authorized": 6
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "efe15640-c2c4-5ede-9847-f33bee660d94",
  "uri": "https://mdm.cameron-dietz.com/id/unit/efe15640-c2c4-5ede-9847-f33bee660d94",
  "type": "unit",
  "slug": "u-nsh-tech",
  "label": "Technology",
  "parent_id": "2b49f254-e8e5-5595-9938-c10c38a60f50",
  "category": {
   "kind": "department"
  },
  "relations": [
   {
    "rel": "head",
    "type": "person",
    "id": "1fbaa8ac-cd32-56c2-850c-ae9b7bdd687c",
    "label": "Kai Mendez",
    "primary": true
   }
  ],
  "data": {
   "echelon": "department",
   "callsign": "TECH",
   "headcount": 5,
   "authorized": 7
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "f7a2fb24-464c-574f-aa8b-d4dc62cb9d50",
  "uri": "https://mdm.cameron-dietz.com/id/unit/f7a2fb24-464c-574f-aa8b-d4dc62cb9d50",
  "type": "unit",
  "slug": "u-nsl-freight",
  "label": "Freight Operations",
  "parent_id": "8e35fdbc-e4c7-5306-8902-ec8dfbb0e81f",
  "category": {
   "kind": "operating_division"
  },
  "relations": [
   {
    "rel": "head",
    "type": "person",
    "id": "eb4123c4-05b9-577d-abe8-99d24743a85a",
    "label": "Sam Okafor",
    "primary": true
   }
  ],
  "data": {
   "echelon": "division",
   "callsign": "FRT",
   "order": 1
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "5be16fba-69ae-5e15-8713-15a405e9f896",
  "uri": "https://mdm.cameron-dietz.com/id/unit/5be16fba-69ae-5e15-8713-15a405e9f896",
  "type": "unit",
  "slug": "u-nsl-hub1",
  "label": "Hub 1 · Austin",
  "parent_id": "f7a2fb24-464c-574f-aa8b-d4dc62cb9d50",
  "category": {
   "kind": "site"
  },
  "data": {
   "echelon": "office",
   "callsign": "HUB1",
   "headcount": 58,
   "authorized": 62,
   "order": 1
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "86d1d10b-e5d7-5044-a584-05db7748d380",
  "uri": "https://mdm.cameron-dietz.com/id/unit/86d1d10b-e5d7-5044-a584-05db7748d380",
  "type": "unit",
  "slug": "u-nsl-hub2",
  "label": "Hub 2 · Round Rock",
  "parent_id": "f7a2fb24-464c-574f-aa8b-d4dc62cb9d50",
  "summary": "Opening December; staffing ramps with the Hub 2 objective.",
  "category": {
   "kind": "site"
  },
  "data": {
   "echelon": "office",
   "callsign": "HUB2",
   "headcount": 9,
   "authorized": 34,
   "order": 2
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "af88c6ba-79aa-5f51-be0c-7ea871a3ad71",
  "uri": "https://mdm.cameron-dietz.com/id/unit/af88c6ba-79aa-5f51-be0c-7ea871a3ad71",
  "type": "unit",
  "slug": "u-nsl-maint",
  "label": "Fleet Maintenance",
  "parent_id": "f7a2fb24-464c-574f-aa8b-d4dc62cb9d50",
  "category": {
   "kind": "department"
  },
  "relations": [
   {
    "rel": "head",
    "type": "person",
    "id": "cf779c16-d82b-5727-b392-d838cc83dff6",
    "label": "Riley Chen",
    "primary": true
   }
  ],
  "data": {
   "echelon": "department",
   "callsign": "MX",
   "headcount": 14,
   "authorized": 16,
   "order": 3
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "92700c9e-54af-5dd3-87e1-c66090cf4090",
  "uri": "https://mdm.cameron-dietz.com/id/unit/92700c9e-54af-5dd3-87e1-c66090cf4090",
  "type": "unit",
  "slug": "u-nsl-admin",
  "label": "Logistics Admin",
  "parent_id": "8e35fdbc-e4c7-5306-8902-ec8dfbb0e81f",
  "category": {
   "kind": "department"
  },
  "data": {
   "echelon": "department",
   "callsign": "ADM",
   "headcount": 11,
   "authorized": 11,
   "order": 2
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "4e033580-3823-5d46-bad5-8ba39b5a1636",
  "uri": "https://mdm.cameron-dietz.com/id/organization/4e033580-3823-5d46-bad5-8ba39b5a1636",
  "type": "organization",
  "slug": "u-nsl-jv",
  "label": "Lone Star Cold Chain JV",
  "parent_id": "8e35fdbc-e4c7-5306-8902-ec8dfbb0e81f",
  "summary": "Refrigerated freight joint venture. Northstar Logistics holds 60%, Northstar Properties 40%.",
  "category": {
   "kind": "joint_venture"
  },
  "relations": [
   {
    "rel": "owned_by",
    "type": "organization",
    "id": "50abeb9b-9fc1-536a-a749-f49b559460dd",
    "label": "Northstar Properties"
   }
  ],
  "data": {
   "echelon": "subsidiary",
   "callsign": "LSCC",
   "headcount": 22,
   "authorized": 24,
   "order": 3,
   "ownership_pct": 60
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "02e40522-c6f3-52fb-9b9b-26e7514072b3",
  "uri": "https://mdm.cameron-dietz.com/id/unit/02e40522-c6f3-52fb-9b9b-26e7514072b3",
  "type": "unit",
  "slug": "u-nsp-asset",
  "label": "Asset Management",
  "parent_id": "50abeb9b-9fc1-536a-a749-f49b559460dd",
  "category": {
   "kind": "department"
  },
  "relations": [
   {
    "rel": "head",
    "type": "person",
    "id": "f455b540-c17d-5948-aac0-ab3b51b22561",
    "label": "Taylor Brooks",
    "primary": true
   }
  ],
  "data": {
   "echelon": "department",
   "callsign": "AM",
   "headcount": 7,
   "authorized": 8
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "bba3be1d-9a2a-516e-a0b4-6158a7f7c302",
  "uri": "https://mdm.cameron-dietz.com/id/unit/bba3be1d-9a2a-516e-a0b4-6158a7f7c302",
  "type": "unit",
  "slug": "u-nsp-ops",
  "label": "Property Operations",
  "parent_id": "50abeb9b-9fc1-536a-a749-f49b559460dd",
  "category": {
   "kind": "department"
  },
  "relations": [
   {
    "rel": "head",
    "type": "person",
    "id": "56ca6341-43cb-56b3-9f9a-f3a197b07d98",
    "label": "Jamie Ford",
    "primary": true
   }
  ],
  "data": {
   "echelon": "department",
   "callsign": "POPS",
   "headcount": 12,
   "authorized": 12
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "59dea68a-d939-5edf-9aae-fe2ea666a00f",
  "uri": "https://mdm.cameron-dietz.com/id/unit/59dea68a-d939-5edf-9aae-fe2ea666a00f",
  "type": "unit",
  "slug": "u-recg-north",
  "label": "North County Section",
  "parent_id": "a431021e-6a10-5065-b17d-c7c2e629bea9",
  "category": {
   "kind": "section"
  },
  "data": {
   "echelon": "section",
   "callsign": "N-SEC",
   "headcount": 14,
   "authorized": 16
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "3edbf1d5-65da-526c-bfd1-29e6c43d1a8c",
  "uri": "https://mdm.cameron-dietz.com/id/unit/3edbf1d5-65da-526c-bfd1-29e6c43d1a8c",
  "type": "unit",
  "slug": "u-recg-south",
  "label": "South County Section",
  "parent_id": "a431021e-6a10-5065-b17d-c7c2e629bea9",
  "category": {
   "kind": "section"
  },
  "data": {
   "echelon": "section",
   "callsign": "S-SEC",
   "headcount": 9,
   "authorized": 16
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "4dc9db3f-0c0b-518a-970f-0d9d42e31c5a",
  "uri": "https://mdm.cameron-dietz.com/id/organization/4dc9db3f-0c0b-518a-970f-0d9d42e31c5a",
  "type": "organization",
  "slug": "tf-granite",
  "label": "Task Force Granite",
  "summary": "Brigade-sized task force for regional disaster response. Uses military echelons.",
  "aliases": [
   "TF Granite"
  ],
  "category": {
   "kind": "task_force",
   "domain": "emergency_management.response"
  },
  "data": {
   "callsign": "TF GRANITE",
   "echelon": "brigade",
   "echelon_scheme": "military"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z",
  "relations": [
   {
    "rel": "commander",
    "type": "person",
    "id": "d48cab38-b795-579f-9b4c-af5eacb77c74",
    "label": "Dana Whitfield",
    "primary": true
   }
  ]
 },
 {
  "id": "cc4fdd81-3ccd-5baf-b11e-ecb1d494aaa6",
  "uri": "https://mdm.cameron-dietz.com/id/unit/cc4fdd81-3ccd-5baf-b11e-ecb1d494aaa6",
  "type": "unit",
  "slug": "u-tf-hhc",
  "label": "HHC, TF Granite",
  "parent_id": "4dc9db3f-0c0b-518a-970f-0d9d42e31c5a",
  "category": {
   "kind": "headquarters"
  },
  "data": {
   "echelon": "company",
   "callsign": "HHC",
   "headcount": 96,
   "authorized": 104,
   "order": 0
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "16899d77-b6a0-5b6e-9851-c8bb33bb4548",
  "uri": "https://mdm.cameron-dietz.com/id/unit/16899d77-b6a0-5b6e-9851-c8bb33bb4548",
  "type": "unit",
  "slug": "u-tf-sig",
  "label": "Granite Signal Company",
  "parent_id": "4dc9db3f-0c0b-518a-970f-0d9d42e31c5a",
  "category": {
   "kind": "signal"
  },
  "data": {
   "echelon": "company",
   "callsign": "SIG",
   "headcount": 58,
   "authorized": 64,
   "order": 4
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "7f31e398-030b-508c-b47c-9338ce1ad1a8",
  "uri": "https://mdm.cameron-dietz.com/id/unit/7f31e398-030b-508c-b47c-9338ce1ad1a8",
  "type": "unit",
  "slug": "u-112",
  "label": "1st Battalion, 12th Infantry",
  "parent_id": "4dc9db3f-0c0b-518a-970f-0d9d42e31c5a",
  "category": {
   "kind": "infantry"
  },
  "relations": [
   {
    "rel": "commander",
    "type": "person",
    "id": "49fe5879-8222-5a5c-88fd-b9bc04a61f7d",
    "label": "Marcus Lee",
    "primary": true
   }
  ],
  "data": {
   "echelon": "battalion",
   "callsign": "1-12 IN",
   "order": 1
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "83df825b-e722-5d0d-b514-ca57e65c5ae1",
  "uri": "https://mdm.cameron-dietz.com/id/unit/83df825b-e722-5d0d-b514-ca57e65c5ae1",
  "type": "unit",
  "slug": "u-112-hhc",
  "label": "HHC, 1-12 IN",
  "parent_id": "7f31e398-030b-508c-b47c-9338ce1ad1a8",
  "category": {
   "kind": "headquarters"
  },
  "data": {
   "echelon": "company",
   "callsign": "HHC/1-12",
   "headcount": 88,
   "authorized": 92,
   "order": 0
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "418174b2-93a9-56bd-874b-8b1a38e63fbb",
  "uri": "https://mdm.cameron-dietz.com/id/unit/418174b2-93a9-56bd-874b-8b1a38e63fbb",
  "type": "unit",
  "slug": "u-112-a",
  "label": "A Company, 1-12 IN",
  "parent_id": "7f31e398-030b-508c-b47c-9338ce1ad1a8",
  "category": {
   "kind": "infantry"
  },
  "relations": [
   {
    "rel": "commander",
    "type": "person",
    "id": "06eee0de-36d1-5412-972b-097bbb44143f",
    "label": "Priya Nair",
    "primary": true
   }
  ],
  "data": {
   "echelon": "company",
   "callsign": "A/1-12",
   "order": 1
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "7e0de56c-ba4c-55ef-a164-4336620f5a85",
  "uri": "https://mdm.cameron-dietz.com/id/unit/7e0de56c-ba4c-55ef-a164-4336620f5a85",
  "type": "unit",
  "slug": "u-112-a-hq",
  "label": "A Co HQ Section",
  "parent_id": "418174b2-93a9-56bd-874b-8b1a38e63fbb",
  "category": {
   "kind": "headquarters"
  },
  "data": {
   "echelon": "section",
   "callsign": "HQ/A",
   "headcount": 9,
   "authorized": 10,
   "order": 0
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "4412e803-6e32-5023-865c-08aa4fb0c8bd",
  "uri": "https://mdm.cameron-dietz.com/id/unit/4412e803-6e32-5023-865c-08aa4fb0c8bd",
  "type": "unit",
  "slug": "u-112-a-1",
  "label": "1st Platoon",
  "parent_id": "418174b2-93a9-56bd-874b-8b1a38e63fbb",
  "category": {
   "kind": "infantry"
  },
  "data": {
   "echelon": "platoon",
   "callsign": "1/A/1-12",
   "headcount": 38,
   "authorized": 42,
   "order": 1
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "fe5b6d02-9e4e-50d1-b393-91f8faec0305",
  "uri": "https://mdm.cameron-dietz.com/id/unit/fe5b6d02-9e4e-50d1-b393-91f8faec0305",
  "type": "unit",
  "slug": "u-112-a-2",
  "label": "2nd Platoon",
  "parent_id": "418174b2-93a9-56bd-874b-8b1a38e63fbb",
  "category": {
   "kind": "infantry"
  },
  "data": {
   "echelon": "platoon",
   "callsign": "2/A/1-12",
   "headcount": 41,
   "authorized": 42,
   "order": 2
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "02aaee90-f3a0-5d5d-b325-eeb7b47d3839",
  "uri": "https://mdm.cameron-dietz.com/id/unit/02aaee90-f3a0-5d5d-b325-eeb7b47d3839",
  "type": "unit",
  "slug": "u-112-a-3",
  "label": "3rd Platoon",
  "parent_id": "418174b2-93a9-56bd-874b-8b1a38e63fbb",
  "category": {
   "kind": "infantry"
  },
  "data": {
   "echelon": "platoon",
   "callsign": "3/A/1-12",
   "headcount": 27,
   "authorized": 42,
   "order": 3
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "ee11c564-0c05-5833-b2a3-875a9f021498",
  "uri": "https://mdm.cameron-dietz.com/id/unit/ee11c564-0c05-5833-b2a3-875a9f021498",
  "type": "unit",
  "slug": "u-112-b",
  "label": "B Company, 1-12 IN",
  "parent_id": "7f31e398-030b-508c-b47c-9338ce1ad1a8",
  "category": {
   "kind": "infantry"
  },
  "data": {
   "echelon": "company",
   "callsign": "B/1-12",
   "headcount": 124,
   "authorized": 131,
   "order": 2
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "79dfa0e4-204f-5de7-9ba2-704bf4036e60",
  "uri": "https://mdm.cameron-dietz.com/id/unit/79dfa0e4-204f-5de7-9ba2-704bf4036e60",
  "type": "unit",
  "slug": "u-28",
  "label": "2nd Squadron, 8th Cavalry",
  "parent_id": "4dc9db3f-0c0b-518a-970f-0d9d42e31c5a",
  "category": {
   "kind": "cavalry"
  },
  "data": {
   "echelon": "squadron",
   "callsign": "2-8 CAV",
   "order": 2
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "cb4e553c-01e8-5740-8737-937167c6b17d",
  "uri": "https://mdm.cameron-dietz.com/id/unit/cb4e553c-01e8-5740-8737-937167c6b17d",
  "type": "unit",
  "slug": "u-28-a",
  "label": "A Troop, 2-8 CAV",
  "parent_id": "79dfa0e4-204f-5de7-9ba2-704bf4036e60",
  "category": {
   "kind": "cavalry"
  },
  "data": {
   "echelon": "troop",
   "callsign": "A/2-8",
   "headcount": 112,
   "authorized": 118,
   "order": 1
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "7f0e8c53-a56b-5d0b-86e5-cf6a1122fde4",
  "uri": "https://mdm.cameron-dietz.com/id/unit/7f0e8c53-a56b-5d0b-86e5-cf6a1122fde4",
  "type": "unit",
  "slug": "u-28-b",
  "label": "B Troop, 2-8 CAV",
  "parent_id": "79dfa0e4-204f-5de7-9ba2-704bf4036e60",
  "summary": "Task-organized to 1-12 IN for the current operation.",
  "category": {
   "kind": "cavalry"
  },
  "relations": [
   {
    "rel": "attached_to",
    "type": "unit",
    "id": "7f31e398-030b-508c-b47c-9338ce1ad1a8",
    "label": "1st Battalion, 12th Infantry"
   }
  ],
  "data": {
   "echelon": "troop",
   "callsign": "B/2-8",
   "headcount": 97,
   "authorized": 118,
   "order": 2
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "7a2db3b3-70d6-5718-8906-41a7c72defdb",
  "uri": "https://mdm.cameron-dietz.com/id/unit/7a2db3b3-70d6-5718-8906-41a7c72defdb",
  "type": "unit",
  "slug": "u-412",
  "label": "412th Brigade Support Battalion",
  "parent_id": "4dc9db3f-0c0b-518a-970f-0d9d42e31c5a",
  "category": {
   "kind": "support"
  },
  "relations": [
   {
    "rel": "commander",
    "type": "person",
    "id": "00835a86-fb4b-5e12-b43a-0279eb09f789",
    "label": "Owen Strand",
    "primary": true
   }
  ],
  "data": {
   "echelon": "battalion",
   "callsign": "412 BSB",
   "order": 3
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "e410ddaa-9c95-593a-a41c-0dce1797e6a9",
  "uri": "https://mdm.cameron-dietz.com/id/unit/e410ddaa-9c95-593a-a41c-0dce1797e6a9",
  "type": "unit",
  "slug": "u-412-d",
  "label": "Distribution Company",
  "parent_id": "7a2db3b3-70d6-5718-8906-41a7c72defdb",
  "category": {
   "kind": "support"
  },
  "data": {
   "echelon": "company",
   "callsign": "A/412",
   "headcount": 140,
   "authorized": 148,
   "order": 1
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "d47d793a-6787-5559-8579-88d4d7447db0",
  "uri": "https://mdm.cameron-dietz.com/id/unit/d47d793a-6787-5559-8579-88d4d7447db0",
  "type": "unit",
  "slug": "u-412-f",
  "label": "Field Maintenance Company",
  "parent_id": "7a2db3b3-70d6-5718-8906-41a7c72defdb",
  "category": {
   "kind": "maintenance"
  },
  "data": {
   "echelon": "company",
   "callsign": "B/412",
   "headcount": 151,
   "authorized": 160,
   "order": 2
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "202dbb95-db41-5e6c-8985-8cd7cc6d7fb7",
  "uri": "https://mdm.cameron-dietz.com/id/unit/202dbb95-db41-5e6c-8985-8cd7cc6d7fb7",
  "type": "unit",
  "slug": "u-412-m",
  "label": "Medical Company",
  "parent_id": "7a2db3b3-70d6-5718-8906-41a7c72defdb",
  "category": {
   "kind": "medical"
  },
  "relations": [
   {
    "rel": "opcon_to",
    "type": "organization",
    "id": "4dc9db3f-0c0b-518a-970f-0d9d42e31c5a",
    "label": "Task Force Granite"
   }
  ],
  "data": {
   "echelon": "company",
   "callsign": "C/412",
   "headcount": 70,
   "authorized": 82,
   "order": 3
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "d48cab38-b795-579f-9b4c-af5eacb77c74",
  "uri": "https://mdm.cameron-dietz.com/id/person/d48cab38-b795-579f-9b4c-af5eacb77c74",
  "type": "person",
  "slug": "p-whitfield",
  "label": "Dana Whitfield",
  "category": {
   "role": "leadership"
  },
  "visibility": "restricted",
  "pii": true,
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "4dc9db3f-0c0b-518a-970f-0d9d42e31c5a",
    "label": "Task Force Granite",
    "primary": true
   }
  ],
  "data": {
   "title": "Task Force Commander",
   "rank": "O-6",
   "callsign": "WHITF-6"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "49fe5879-8222-5a5c-88fd-b9bc04a61f7d",
  "uri": "https://mdm.cameron-dietz.com/id/person/49fe5879-8222-5a5c-88fd-b9bc04a61f7d",
  "type": "person",
  "slug": "p-lee",
  "label": "Marcus Lee",
  "category": {
   "role": "leadership"
  },
  "visibility": "restricted",
  "pii": true,
  "relations": [
   {
    "rel": "organization",
    "type": "unit",
    "id": "7f31e398-030b-508c-b47c-9338ce1ad1a8",
    "label": "1st Battalion, 12th Infantry",
    "primary": true
   },
   {
    "rel": "reports_to",
    "type": "person",
    "id": "d48cab38-b795-579f-9b4c-af5eacb77c74",
    "label": "Dana Whitfield",
    "primary": true
   }
  ],
  "data": {
   "title": "Battalion Commander, 1-12 IN",
   "rank": "O-5",
   "callsign": "LEE-6"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "06eee0de-36d1-5412-972b-097bbb44143f",
  "uri": "https://mdm.cameron-dietz.com/id/person/06eee0de-36d1-5412-972b-097bbb44143f",
  "type": "person",
  "slug": "p-nair",
  "label": "Priya Nair",
  "category": {
   "role": "leadership"
  },
  "visibility": "restricted",
  "pii": true,
  "relations": [
   {
    "rel": "organization",
    "type": "unit",
    "id": "418174b2-93a9-56bd-874b-8b1a38e63fbb",
    "label": "A Company, 1-12 IN",
    "primary": true
   },
   {
    "rel": "reports_to",
    "type": "person",
    "id": "49fe5879-8222-5a5c-88fd-b9bc04a61f7d",
    "label": "Marcus Lee",
    "primary": true
   }
  ],
  "data": {
   "title": "Company Commander, A/1-12",
   "rank": "O-3",
   "callsign": "NAIR-6"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "00835a86-fb4b-5e12-b43a-0279eb09f789",
  "uri": "https://mdm.cameron-dietz.com/id/person/00835a86-fb4b-5e12-b43a-0279eb09f789",
  "type": "person",
  "slug": "p-strand",
  "label": "Owen Strand",
  "category": {
   "role": "leadership"
  },
  "visibility": "restricted",
  "pii": true,
  "relations": [
   {
    "rel": "organization",
    "type": "unit",
    "id": "7a2db3b3-70d6-5718-8906-41a7c72defdb",
    "label": "412th Brigade Support Battalion",
    "primary": true
   },
   {
    "rel": "reports_to",
    "type": "person",
    "id": "d48cab38-b795-579f-9b4c-af5eacb77c74",
    "label": "Dana Whitfield",
    "primary": true
   }
  ],
  "data": {
   "title": "Battalion Commander, 412 BSB",
   "rank": "O-5",
   "callsign": "STRAN-6"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "eeeecc92-fa83-5386-9655-a5d4ecacf45f",
  "uri": "https://mdm.cameron-dietz.com/id/goal/eeeecc92-fa83-5386-9655-a5d4ecacf45f",
  "type": "goal",
  "slug": "g-tf-ready",
  "label": "TF Granite certified for disaster response",
  "category": {
   "domain": "emergency_management.response",
   "priority": "high"
  },
  "state": "in_progress",
  "owner": {
   "type": "person",
   "id": "d48cab38-b795-579f-9b4c-af5eacb77c74",
   "label": "Dana Whitfield"
  },
  "relations": [
   {
    "rel": "organization",
    "type": "organization",
    "id": "4dc9db3f-0c0b-518a-970f-0d9d42e31c5a",
    "label": "Task Force Granite",
    "primary": true
   }
  ],
  "data": {
   "target_date": "2027-02-28",
   "kpi": {
    "metric": "Units at 90% strength",
    "current": 11,
    "target": 15,
    "unit": "units"
   }
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "ddb2c5b3-d577-5564-8c70-db5b2ad33d34",
  "uri": "https://mdm.cameron-dietz.com/id/objective/ddb2c5b3-d577-5564-8c70-db5b2ad33d34",
  "type": "objective",
  "slug": "o-tf-strength",
  "label": "Bring A/1-12 to 90% strength",
  "parent_id": "eeeecc92-fa83-5386-9655-a5d4ecacf45f",
  "category": {
   "priority": "high"
  },
  "state": "at_risk",
  "owner": {
   "type": "person",
   "id": "06eee0de-36d1-5412-972b-097bbb44143f",
   "label": "Priya Nair"
  },
  "relations": [
   {
    "rel": "organization",
    "type": "unit",
    "id": "418174b2-93a9-56bd-874b-8b1a38e63fbb",
    "label": "A Company, 1-12 IN",
    "primary": true
   }
  ],
  "data": {
   "target_date": "2026-11-30"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "7a1fc44a-9b29-55c1-837f-14234bb8e8cf",
  "uri": "https://mdm.cameron-dietz.com/id/task/7a1fc44a-9b29-55c1-837f-14234bb8e8cf",
  "type": "task",
  "slug": "k-tf-crosslevel",
  "label": "Cross-level 8 soldiers into 3rd Platoon",
  "parent_id": "ddb2c5b3-d577-5564-8c70-db5b2ad33d34",
  "category": {
   "priority": "high"
  },
  "state": "blocked",
  "relations": [
   {
    "rel": "organization",
    "type": "unit",
    "id": "02aaee90-f3a0-5d5d-b325-eeb7b47d3839",
    "label": "3rd Platoon",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "06eee0de-36d1-5412-972b-097bbb44143f",
    "label": "Priya Nair",
    "primary": true
   }
  ],
  "data": {
   "start": "2026-10-01",
   "due": "2026-10-20",
   "progress": 20,
   "estimate_h": 12,
   "blocker": "Waiting on S1 orders"
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "a3aca95f-3690-5a22-ab23-6c22d43408e0",
  "uri": "https://mdm.cameron-dietz.com/id/task/a3aca95f-3690-5a22-ab23-6c22d43408e0",
  "type": "task",
  "slug": "k-tf-gunnery",
  "label": "Complete squad live-fire qualification",
  "parent_id": "ddb2c5b3-d577-5564-8c70-db5b2ad33d34",
  "category": {
   "priority": "medium"
  },
  "state": "in_progress",
  "relations": [
   {
    "rel": "organization",
    "type": "unit",
    "id": "418174b2-93a9-56bd-874b-8b1a38e63fbb",
    "label": "A Company, 1-12 IN",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "06eee0de-36d1-5412-972b-097bbb44143f",
    "label": "Priya Nair",
    "primary": true
   }
  ],
  "data": {
   "start": "2026-10-12",
   "due": "2026-11-06",
   "progress": 30,
   "estimate_h": 40
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 },
 {
  "id": "8b874d2c-94eb-5138-97d3-39f89933fccd",
  "uri": "https://mdm.cameron-dietz.com/id/task/8b874d2c-94eb-5138-97d3-39f89933fccd",
  "type": "task",
  "slug": "k-tf-medcert",
  "label": "Medical company field validation",
  "parent_id": "eeeecc92-fa83-5386-9655-a5d4ecacf45f",
  "category": {
   "priority": "medium"
  },
  "state": "not_started",
  "relations": [
   {
    "rel": "organization",
    "type": "unit",
    "id": "202dbb95-db41-5e6c-8985-8cd7cc6d7fb7",
    "label": "Medical Company",
    "primary": true
   },
   {
    "rel": "assignee",
    "type": "person",
    "id": "00835a86-fb4b-5e12-b43a-0279eb09f789",
    "label": "Owen Strand",
    "primary": true
   }
  ],
  "data": {
   "start": "2026-11-09",
   "due": "2026-11-20",
   "progress": 0,
   "estimate_h": 30
  },
  "status": "active",
  "created_at": "2026-10-01T12:00:00Z",
  "updated_at": "2026-10-01T12:00:00Z"
 }
];
