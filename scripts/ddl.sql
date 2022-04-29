-- DROP SCHEMA test;

CREATE SCHEMA test ;


-- test.app_audit definition

-- Drop table

-- DROP TABLE test.app_audit;

CREATE TABLE test.app_audit (
	audit_id serial4 NOT NULL,
	audit_action varchar(100) NOT NULL,
	audit_data json NULL,
	audit_by varchar(50) NOT NULL,
	audit_on timestamp NOT NULL,
	audit_status varchar(50) NULL,
	audit_error json NULL,
	CONSTRAINT app_audit_pkey PRIMARY KEY (audit_id)
);

-- test.app_user definition

-- Drop table

-- DROP TABLE test.app_user;

CREATE TABLE test.app_user (
	user_id serial4 NOT NULL,
	username varchar(100) NOT NULL,
	"password" varchar(100) NOT NULL,
	email varchar(355) NOT NULL,
	CONSTRAINT user_email_key UNIQUE (email),
	CONSTRAINT user_pkey PRIMARY KEY (user_id)
);

-- test.info_student definition

-- Drop table

-- DROP TABLE test.info_student;

CREATE TABLE test.info_student (
	user_id serial4 NOT NULL,
	fullname varchar(100) NOT NULL,
	user_number varchar(11) NOT NULL,
	address varchar(100) NOT NULL,
	grade varchar(5) NOT NULL,
	major varchar(30) NOT NULL,
	course1 varchar(30) NOT NULL,
	course2 varchar(30) NOT NULL,
	course3 varchar(30) NOT NULL,
	course4 varchar(30) NOT NULL,
	course5 varchar(30) NOT NULL,
	course6 varchar(30) NULL,
	course7 varchar(30) NULL,
	course8 varchar(30) NULL
);


-- test.info_student foreign keys

ALTER TABLE test.info_student ADD CONSTRAINT info_student_user_id_fkey FOREIGN KEY (user_id) REFERENCES test.app_user(user_id);