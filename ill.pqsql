--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3 (Ubuntu 14.3-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.3 (Ubuntu 14.3-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: answers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.answers (
    id integer NOT NULL,
    answer character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.answers OWNER TO postgres;

--
-- Name: answers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.answers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.answers_id_seq OWNER TO postgres;

--
-- Name: answers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.answers_id_seq OWNED BY public.answers.id;


--
-- Name: codes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.codes (
    id integer NOT NULL,
    data text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "listId" integer NOT NULL
);


ALTER TABLE public.codes OWNER TO postgres;

--
-- Name: codes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.codes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.codes_id_seq OWNER TO postgres;

--
-- Name: codes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.codes_id_seq OWNED BY public.codes.id;


--
-- Name: feedbacks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.feedbacks (
    id integer NOT NULL,
    question text NOT NULL,
    type character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.feedbacks OWNER TO postgres;

--
-- Name: feedbacks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.feedbacks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.feedbacks_id_seq OWNER TO postgres;

--
-- Name: feedbacks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.feedbacks_id_seq OWNED BY public.feedbacks.id;


--
-- Name: lists; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lists (
    id integer NOT NULL,
    type character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);


ALTER TABLE public.lists OWNER TO postgres;

--
-- Name: lists_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.lists_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lists_id_seq OWNER TO postgres;

--
-- Name: lists_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.lists_id_seq OWNED BY public.lists.id;


--
-- Name: logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.logs (
    id integer NOT NULL,
    data json,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "codeId" integer NOT NULL
);


ALTER TABLE public.logs OWNER TO postgres;

--
-- Name: logs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.logs_id_seq OWNER TO postgres;

--
-- Name: logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.logs_id_seq OWNED BY public.logs.id;


--
-- Name: nodes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nodes (
    id integer NOT NULL,
    data json,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "listId" integer NOT NULL
);


ALTER TABLE public.nodes OWNER TO postgres;

--
-- Name: nodes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.nodes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.nodes_id_seq OWNER TO postgres;

--
-- Name: nodes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.nodes_id_seq OWNED BY public.nodes.id;


--
-- Name: operations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.operations (
    id integer NOT NULL,
    data json,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "codeId" integer NOT NULL
);


ALTER TABLE public.operations OWNER TO postgres;

--
-- Name: operations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.operations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.operations_id_seq OWNER TO postgres;

--
-- Name: operations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.operations_id_seq OWNED BY public.operations.id;


--
-- Name: question_answers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.question_answers (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "questionId" integer NOT NULL,
    "answerId" integer NOT NULL
);


ALTER TABLE public.question_answers OWNER TO postgres;

--
-- Name: questions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.questions (
    id integer NOT NULL,
    question text NOT NULL,
    "isCorrectId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.questions OWNER TO postgres;

--
-- Name: questions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.questions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.questions_id_seq OWNER TO postgres;

--
-- Name: questions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.questions_id_seq OWNED BY public.questions.id;


--
-- Name: quests; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.quests (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    detail character varying(255) NOT NULL,
    tool character varying(255) NOT NULL,
    type character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.quests OWNER TO postgres;

--
-- Name: quests_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.quests_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.quests_id_seq OWNER TO postgres;

--
-- Name: quests_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.quests_id_seq OWNED BY public.quests.id;


--
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- Name: searchLogs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."searchLogs" (
    id integer NOT NULL,
    data json,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "codeId" integer NOT NULL
);


ALTER TABLE public."searchLogs" OWNER TO postgres;

--
-- Name: searchLogs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."searchLogs_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."searchLogs_id_seq" OWNER TO postgres;

--
-- Name: searchLogs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."searchLogs_id_seq" OWNED BY public."searchLogs".id;


--
-- Name: structs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.structs (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    data json NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "listId" integer NOT NULL
);


ALTER TABLE public.structs OWNER TO postgres;

--
-- Name: structs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.structs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.structs_id_seq OWNER TO postgres;

--
-- Name: structs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.structs_id_seq OWNED BY public.structs.id;


--
-- Name: userQuiz_questions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."userQuiz_questions" (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "quizId" integer NOT NULL,
    "questionId" integer NOT NULL
);


ALTER TABLE public."userQuiz_questions" OWNER TO postgres;

--
-- Name: user_feedbacks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_feedbacks (
    id integer NOT NULL,
    answer text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer,
    "feedbackId" integer
);


ALTER TABLE public.user_feedbacks OWNER TO postgres;

--
-- Name: user_feedbacks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_feedbacks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_feedbacks_id_seq OWNER TO postgres;

--
-- Name: user_feedbacks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_feedbacks_id_seq OWNED BY public.user_feedbacks.id;


--
-- Name: user_quests; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_quests (
    id integer NOT NULL,
    "isComplete" boolean NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer,
    "questId" integer
);


ALTER TABLE public.user_quests OWNER TO postgres;

--
-- Name: user_quests_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_quests_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_quests_id_seq OWNER TO postgres;

--
-- Name: user_quests_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_quests_id_seq OWNED BY public.user_quests.id;


--
-- Name: user_quizzes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_quizzes (
    id integer NOT NULL,
    result integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);


ALTER TABLE public.user_quizzes OWNER TO postgres;

--
-- Name: user_quizzes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_quizzes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_quizzes_id_seq OWNER TO postgres;

--
-- Name: user_quizzes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_quizzes_id_seq OWNED BY public.user_quizzes.id;


--
-- Name: user_roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_roles (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer NOT NULL,
    "roleId" integer NOT NULL
);


ALTER TABLE public.user_roles OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: answers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.answers ALTER COLUMN id SET DEFAULT nextval('public.answers_id_seq'::regclass);


--
-- Name: codes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.codes ALTER COLUMN id SET DEFAULT nextval('public.codes_id_seq'::regclass);


--
-- Name: feedbacks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.feedbacks ALTER COLUMN id SET DEFAULT nextval('public.feedbacks_id_seq'::regclass);


--
-- Name: lists id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lists ALTER COLUMN id SET DEFAULT nextval('public.lists_id_seq'::regclass);


--
-- Name: logs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.logs ALTER COLUMN id SET DEFAULT nextval('public.logs_id_seq'::regclass);


--
-- Name: nodes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nodes ALTER COLUMN id SET DEFAULT nextval('public.nodes_id_seq'::regclass);


--
-- Name: operations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.operations ALTER COLUMN id SET DEFAULT nextval('public.operations_id_seq'::regclass);


--
-- Name: questions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.questions ALTER COLUMN id SET DEFAULT nextval('public.questions_id_seq'::regclass);


--
-- Name: quests id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quests ALTER COLUMN id SET DEFAULT nextval('public.quests_id_seq'::regclass);


--
-- Name: searchLogs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."searchLogs" ALTER COLUMN id SET DEFAULT nextval('public."searchLogs_id_seq"'::regclass);


--
-- Name: structs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.structs ALTER COLUMN id SET DEFAULT nextval('public.structs_id_seq'::regclass);


--
-- Name: user_feedbacks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_feedbacks ALTER COLUMN id SET DEFAULT nextval('public.user_feedbacks_id_seq'::regclass);


--
-- Name: user_quests id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_quests ALTER COLUMN id SET DEFAULT nextval('public.user_quests_id_seq'::regclass);


--
-- Name: user_quizzes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_quizzes ALTER COLUMN id SET DEFAULT nextval('public.user_quizzes_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: answers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.answers (id, answer, "createdAt", "updatedAt") FROM stdin;
1	pointer	2022-07-05 07:48:05.508+00	2022-07-05 07:48:05.508+00
2	stack	2022-07-05 07:48:13.37+00	2022-07-05 07:48:13.37+00
3	linked list	2022-07-05 07:48:20.846+00	2022-07-05 07:48:20.846+00
4	struct	2022-07-05 07:48:26.69+00	2022-07-05 07:48:26.69+00
5	int *data	2022-07-05 07:48:39.761+00	2022-07-05 07:48:39.761+00
6	int* data	2022-07-05 07:51:56.272+00	2022-07-05 07:51:56.272+00
7	int data*	2022-07-05 07:52:08.989+00	2022-07-05 07:52:08.989+00
8	*int data	2022-07-05 07:52:17.388+00	2022-07-05 07:52:17.388+00
9	struct nama_struct { tipedata nama_element }; 	2022-07-05 08:00:05+00	2022-07-05 08:00:05+00
10	struct nama_struct { nama_element tipedata }; 	2022-07-05 08:00:47.845+00	2022-07-05 08:00:47.845+00
11	nama_struct struct { tipedata nama_element }; 	2022-07-05 08:01:32.338+00	2022-07-05 08:01:32.338+00
12	Nama_struct struct { tipedata nama_element };	2022-07-05 08:02:00.154+00	2022-07-05 08:02:00.154+00
13	merepresentasikan sebuah objek yang memiliki lebih dari satu atribut	2022-07-05 08:03:10.275+00	2022-07-05 08:03:10.275+00
14	menjalankan sebuah fungsi	2022-07-05 08:03:19.137+00	2022-07-05 08:03:19.137+00
15	menginisiasi suatu element	2022-07-05 08:03:28.061+00	2022-07-05 08:03:28.061+00
16	mengakses suatu element	2022-07-05 08:03:35.778+00	2022-07-05 08:03:35.778+00
17	Pointer next	2022-07-05 08:04:50.39+00	2022-07-05 08:04:50.39+00
18	Struct data	2022-07-05 08:04:56.507+00	2022-07-05 08:04:56.507+00
19	Linked list	2022-07-05 08:05:05.387+00	2022-07-05 08:05:05.387+00
20	Pointer prev	2022-07-05 08:05:13.856+00	2022-07-05 08:05:13.856+00
21	Pemakaian memory lebih besar	2022-07-05 08:06:04.04+00	2022-07-05 08:06:04.04+00
22	Proses traversal lebih panjang karena tidak bisa langsung mengakses data dengan indeks	2022-07-05 08:06:13.756+00	2022-07-05 08:06:13.756+00
23	Proses traversal lebih panjang karena tidak bisa langsung mengakses data dengan indeks	2022-07-05 08:06:24.296+00	2022-07-05 08:06:24.296+00
24	Penambahan data maupun penghapusan data relatif lebih cepat	2022-07-05 08:06:33.052+00	2022-07-05 08:06:33.052+00
25	void initiate(){head = tail = NULL;}	2022-07-05 08:09:29.79+00	2022-07-05 08:09:29.79+00
26	void initiate(){head = tail = start;}	2022-07-05 08:09:57.116+00	2022-07-05 08:09:57.116+00
27	void initiate(){tail = NULL;}	2022-07-05 08:10:20.614+00	2022-07-05 08:10:20.614+00
28	void initiate(){head = NULL;}	2022-07-05 08:10:46.387+00	2022-07-05 08:10:46.387+00
29	Menggunakan 2 pointer (prev dan next)	2022-07-05 08:17:26.53+00	2022-07-05 08:17:26.53+00
30	Menggunakan struct	2022-07-05 08:17:37.29+00	2022-07-05 08:17:37.29+00
31	Menggunakan pointer next	2022-07-05 08:17:47.292+00	2022-07-05 08:17:47.292+00
32	Cara inisiasi yang berbeda	2022-07-05 08:17:59.348+00	2022-07-05 08:17:59.348+00
33	Next dan tail	2022-07-05 08:52:52.84+00	2022-07-05 08:52:52.84+00
34	Tail dan start	2022-07-05 08:53:06.916+00	2022-07-05 08:53:06.916+00
35	Head, dan start	2022-07-05 08:53:18.614+00	2022-07-05 08:53:18.614+00
36	Prev dan next	2022-07-05 08:53:32.029+00	2022-07-05 08:53:32.029+00
37	Insert after index	2022-07-05 09:23:40.711+00	2022-07-05 09:23:40.711+00
38	Insert before index	2022-07-05 09:24:03.424+00	2022-07-05 09:24:03.424+00
39	Hapus node di index	2022-07-05 09:24:15.013+00	2022-07-05 09:24:15.013+00
40	add to tail single linked list	2022-07-05 09:24:25.978+00	2022-07-05 09:24:25.978+00
41	void deleteFirst(){\n node *temp = head;\n head = head->next;\n free (temp);\n printf('Data telah dihapus\n');\n system('PAUSE');\n system('cls');\n };	2022-07-05 09:29:51.373+00	2022-07-05 09:29:51.373+00
42	void deleteFirst(){\n node *temp = head;\n head = head->next;\n free (temp);\n printf('Data telah dihapus\n');\n };	2022-07-05 09:31:06.289+00	2022-07-05 09:31:06.289+00
43	void deleteFirst(){\n node *temp = head;\n head = head->next;\n system('PAUSE');\n system('cls');\n };	2022-07-05 09:31:17.517+00	2022-07-05 09:31:17.517+00
44	void deleteFirst(){\n free (temp);\n printf('Data telah dihapus\n');\n system('PAUSE');\n system('cls');\n };	2022-07-05 09:31:27.997+00	2022-07-05 09:31:27.997+00
45	Secara ukuran lebih dinamis	2022-07-05 09:48:26.286+00	2022-07-05 09:48:26.286+00
46	Alokasi penggunaan memory dapat disesuaikan dengan mudah sesuai kebutuhan	2022-07-05 09:49:30.126+00	2022-07-05 09:49:30.126+00
47	Penambahan data maupun penghapusan data relatif lebih cepat	2022-07-05 09:51:23.896+00	2022-07-05 09:51:23.896+00
48	Proses traversal lebih panjang karena tidak bisa langsung mengakses data dengan indeks	2022-07-05 09:51:32.088+00	2022-07-05 09:51:32.088+00
49	linked list dimana setiap node terhubung dengan node lainnya oleh dua buah pointer	2022-07-05 09:55:56.531+00	2022-07-05 09:55:56.531+00
50	tipe data abstrak berupa list (urutan) dimana penambahan dan pengambilan elemen list hanya boleh dilakukan pada satu sisi yang disebut top (puncak)	2022-07-05 09:56:17.086+00	2022-07-05 09:56:17.086+00
51	tipe data abstrak berupa list (urutan) dimana penambahan elemen hanya boleh dilakukan dari sisi depan (head) sedangkan pengambilan elemen list hanya boleh dilakukan dari sisi belakang (tail)	2022-07-05 09:56:35.448+00	2022-07-05 09:56:35.448+00
52	linked list dimana setiap node terhubung dengan node lainnya oleh sebuah pointer tunggal	2022-07-05 09:56:47.583+00	2022-07-05 09:56:47.583+00
53	'newNode = Node(value)\n if self.firstNode != None:\n current = self.firstNode\n while current.link != None:\n current = current.link\n current.link = newNode\n else:\n self.firstNode = newNode	2022-07-05 09:58:00.348+00	2022-07-05 09:58:00.348+00
54	if self.firstNode == None:\n print('List is empty')\n return \n current = self.firstNode\n while current.link != None:\n print(current.value)\n current = current.link	2022-07-05 09:59:42.152+00	2022-07-05 09:59:42.152+00
55	newNode = Node(value)\n if self.firstNode != None:\n newNode.link = self.firstNode\n self.firstNode = newNode\n else:\n self.firstNode = newNode\n	2022-07-05 10:00:37.982+00	2022-07-05 10:00:37.982+00
56	if self.firstNode == None:\n print('ist is empty')\n return\n if self.firstNode == value:\n temp = self.firstNode\n self.firstNode = temp.link\n temp = None\n return \n current = self.firstNode\n while current.link != None	2022-07-05 10:02:46.61+00	2022-07-05 10:02:46.61+00
\.


--
-- Data for Name: codes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.codes (id, data, "createdAt", "updatedAt", "listId") FROM stdin;
1	\n    #include <stdio.h>\n    #include <stdlib.h>\n    #include <malloc.h>\n    #include <iostream>\n    #include <string>\n    using namespace std;\n    \n    struct Asolole {\n        Asolole* next;\n        Asolole* prev;\n        int jos;\n    };\n\n    struct Asolole *start = NULL;\n    \n    struct Asolole *add_new_node(struct Asolole *start, int jos)\n    {\n        Asolole *new_node, *ptr;\n\n        new_node = (struct Asolole*)malloc(sizeof(struct Asolole));\n        new_node -> jos = jos;\n        ptr = start;\n\n        if (start != NULL) {\n            while(ptr -> next != NULL) {\n                ptr = ptr -> next;\n            }\n\n            new_node -> prev = ptr;\n            ptr -> next = new_node;\n            new_node -> next = NULL;\n        } else {\n            new_node -> next = NULL;\n            new_node -> prev = NULL;\n            start = new_node;\n        }\n        cout << "- Adding new node" << endl;\n        return start;\n    }\n    \n    struct Asolole *insert_after_index(struct Asolole  *start, int index, int jos)\n    {\n        Asolole  *new_node, *ptr;\n\n    \tnew_node = (struct Asolole  *)malloc(sizeof(struct Asolole ));\n    \tnew_node -> jos = jos;\n    \t\n    \tptr = start;\n    \tfor (int i = 0; i < index; i++) {\n    \t    ptr = ptr -> next;\n    \t}\n    \t\n    \tnew_node -> next = ptr -> next;\n        new_node -> prev = ptr;\n        ptr -> next = new_node;\n        ptr -> next -> prev = new_node;\n        cout << "- Insert node after index " << index << endl;\n    \treturn start;\n    }\n    \n    struct Asolole *search_data_by_jos(struct Asolole *start, int jos)\n    {\n        Asolole *ptr;\n        ptr = start;\n        int index = 0;\n        cout << "- Seach node" << endl;\n        while (ptr != NULL) \n        { \n            if (ptr -> jos == jos) {\n                cout << " => jos : " << jos << endl;\n                cout << " => Node in index "<< index << endl;\n                return start;\n            }\n            ptr = ptr->next; \n            index++;\n        }\n        cout << " => jos : " << jos << endl;\n        cout << " => Node data not found" << endl;\n        return start; \n    }\n    \n    struct Asolole *insert_before_index(struct Asolole *start, int index, int jos)\n    {\n        Asolole *new_node, *ptr;\n\n    \tnew_node = (struct Asolole *)malloc(sizeof(struct Asolole));\n    \tnew_node -> jos = jos;\n    \t\n    \tif(index < 1) {\n    \t    new_node -> next = start;\n            new_node -> prev = start -> prev;\n    \t    start = new_node;\n    \t    \n    \t} else {\n    \t    ptr = start;\n    \t    for (int i = 0; i < index - 1; i++) {\n    \t        ptr = ptr -> next;\n    \t    }\n    \t    \n    \t    new_node -> next = ptr -> next;\n            new_node -> prev = ptr;\n    \t    ptr -> next = new_node;\n            ptr -> next -> prev = new_node;\n    \t}\n        cout << "- Insert node before index " << index << endl;\n    \treturn start;\n    }\n    \n    struct Asolole *display(struct Asolole *start)\n    {\n        struct Asolole *ptr;\n        int index = 0;\n        ptr = start;\n        cout << endl << "LINKED LIST RESULT :" << endl;\n        while(ptr != NULL) {\n            cout << "Index " << index << endl;\n            cout << "DATA " << endl;\n            cout << "jos : " << ptr -> jos << endl;\n            cout << endl;\n            ptr = ptr -> next;\n            index++;\n        }\n        return start;\n    }\n    \n    int main(int argc, char *argv[]) {\n        cout << "OPERATION LIST" << endl;\n        start = add_new_node(start, 312);\n        start = add_new_node(start, 4213);\n        start = insert_after_index(start, 1, 32);\n        start = search_data_by_jos(start, 32);\n        start = insert_before_index(start, 0, 213);\n        \n        start = display(start);\n        return 0;\n    };\n        	2022-07-04 15:27:48.201+00	2022-07-05 10:20:56.515+00	1
2		2022-07-05 10:23:16.198+00	2022-07-05 10:26:13.78+00	2
3		2022-07-05 11:46:34.527+00	2022-07-05 11:46:34.527+00	3
9		2022-07-06 08:20:54.074+00	2022-07-06 08:23:59.206+00	10
11	\n    #include <stdio.h>\n    #include <stdlib.h>\n    #include <malloc.h>\n    #include <iostream>\n    #include <string>\n    using namespace std;\n    \n    struct mahasiswa {\n        mahasiswa* next;\n        string Nama;\n        int Nrp;\n    };\n\n    struct mahasiswa *start = NULL;\n    \n    struct mahasiswa *add_new_node(struct mahasiswa *start, string Nama, int Nrp)\n    {\n        mahasiswa *new_node, *ptr;\n\n        new_node = (struct mahasiswa*)malloc(sizeof(struct mahasiswa));\n        new_node -> Nama = Nama;\n        new_node -> Nrp = Nrp;\n        ptr = start;\n\n        if (start != NULL) {\n            while(ptr -> next != NULL) {\n                ptr = ptr -> next;\n            }\n\n            ptr -> next = new_node;\n            new_node -> next = NULL;\n        } else {\n            new_node -> next = NULL;\n            start = new_node;\n        }\n        cout << "- Adding new node" << endl;\n        return start;\n    }\n    \n    struct mahasiswa *display(struct mahasiswa *start)\n    {\n        struct mahasiswa *ptr;\n        int index = 0;\n        ptr = start;\n        cout << endl << "LINKED LIST RESULT :" << endl;\n        while(ptr != NULL) {\n            cout << "Index " << index << endl;\n            cout << "DATA " << endl;\n            cout << "Nama : " << ptr -> Nama << endl;\n            cout << "Nrp : " << ptr -> Nrp << endl;\n            cout << endl;\n            ptr = ptr -> next;\n            index++;\n        }\n        return start;\n    }\n    \n    int main(int argc, char *argv[]) {\n        cout << "OPERATION LIST" << endl;\n        start = add_new_node(start, "Bayu", 36);\n        \n        start = display(start);\n        return 0;\n    };\n        	2022-07-06 08:39:59.412+00	2022-07-06 08:40:38.006+00	12
13	\n    #include <stdio.h>\n    #include <stdlib.h>\n    #include <malloc.h>\n    #include <iostream>\n    #include <string>\n    using namespace std;\n    \n    struct penduduk {\n        penduduk* next;\n        int jmlh;\n        string nama;\n        string alamat;\n    };\n\n    struct penduduk *start = NULL;\n    \n    struct penduduk *add_new_node(struct penduduk *start, int jmlh, string nama, string alamat)\n    {\n        penduduk *new_node, *ptr;\n\n        new_node = (struct penduduk*)malloc(sizeof(struct penduduk));\n        new_node -> jmlh = jmlh;\n        new_node -> nama = nama;\n        new_node -> alamat = alamat;\n        ptr = start;\n\n        if (start != NULL) {\n            while(ptr -> next != NULL) {\n                ptr = ptr -> next;\n            }\n\n            ptr -> next = new_node;\n            new_node -> next = NULL;\n        } else {\n            new_node -> next = NULL;\n            start = new_node;\n        }\n        cout << "- Adding new node" << endl;\n        return start;\n    }\n    \n    struct penduduk *insert_before_index(struct penduduk *start, int index, int jmlh, string nama, string alamat)\n    {\n        penduduk *new_node, *ptr;\n\n    \tnew_node = (struct penduduk *)malloc(sizeof(struct penduduk));\n    \tnew_node -> jmlh = jmlh;\n        new_node -> nama = nama;\n        new_node -> alamat = alamat;\n    \t\n    \tif(index < 1) {\n    \t    new_node -> next = start;\n    \t    start = new_node;\n    \t    \n    \t} else {\n    \t    ptr = start;\n    \t    for (int i = 0; i < index - 1; i++) {\n    \t        ptr = ptr -> next;\n    \t    }\n    \t    \n    \t    new_node -> next = ptr -> next;\n    \t    ptr -> next = new_node;\n    \t}\n        cout << "- Insert node before index " << index << endl;\n    \treturn start;\n    }\n    \n    struct penduduk *delete_in_index(struct penduduk *start, int index)\n    {\n        penduduk *ptr;\n        ptr = start;\n\n        if (index < 1) {\n            start = ptr -> next;\n            ptr -> next = NULL;\n            free(ptr);\n        } else {\n            for(int i = 0; i < index-1; i++) {\n                ptr = ptr -> next;\n            }\n            penduduk *deleteNode = ptr -> next;\n            ptr -> next = ptr -> next -> next;\n            deleteNode -> next = NULL;\n            free(deleteNode);\n        }\n        cout << "- Delete node in index " << index << endl;\n        return start;\n    }\n    \n    struct penduduk *display(struct penduduk *start)\n    {\n        struct penduduk *ptr;\n        int index = 0;\n        ptr = start;\n        cout << endl << "LINKED LIST RESULT :" << endl;\n        while(ptr != NULL) {\n            cout << "Index " << index << endl;\n            cout << "DATA " << endl;\n            cout << "jmlh : " << ptr -> jmlh << endl;\n            cout << "nama : " << ptr -> nama << endl;\n            cout << "alamat : " << ptr -> alamat << endl;\n            cout << endl;\n            ptr = ptr -> next;\n            index++;\n        }\n        return start;\n    }\n    \n    int main(int argc, char *argv[]) {\n        cout << "OPERATION LIST" << endl;\n        start = add_new_node(start, 1, "pijo", "munirah");\n        start = add_new_node(start, 2, "paijem", "munriah");\n        start = insert_before_index(start, 0, 3, "po", "ok");\n        start = delete_in_index(start, 0);\n        \n        start = display(start);\n        return 0;\n    };\n        	2022-07-06 08:43:15.217+00	2022-07-06 08:47:03.513+00	14
10		2022-07-06 08:36:14.366+00	2022-07-06 08:41:55.5+00	11
12		2022-07-06 08:42:24.757+00	2022-07-06 08:42:24.757+00	13
15		2022-07-06 11:37:40.818+00	2022-07-06 11:39:07.966+00	16
17	\n    #include <stdio.h>\n    #include <stdlib.h>\n    #include <malloc.h>\n    #include <iostream>\n    #include <string>\n    using namespace std;\n    \n    struct TestData {\n        TestData* next;\n        int data;\n    };\n\n    struct TestData *start = NULL;\n    \n    struct TestData *add_new_node (struct TestData *start, int data)\n    {\n        TestData *new_node, *ptr;\n\n        new_node = (struct TestData*)malloc(sizeof(struct TestData));\n        new_node -> data = data;\n        ptr = start;\n\n        if (start != NULL) {\n            while(ptr -> next != start) {\n                ptr = ptr -> next;\n            }\n\n            ptr -> next = new_node;\n            new_node -> next = start;\n        } else {\n            new_node -> next = new_node;\n            start = new_node;\n        }\n        cout << "- Adding new node" << endl;\n        return start;\n    }\n    \n    struct TestData *display(struct TestData *start)\n    {\n        struct TestData *ptr;\n        int index = 0;\n        ptr = start;\n        cout << endl << "LINKED LIST RESULT :" << endl;\n        while(ptr -> next != start) {\n            cout << "Index " << index << endl;\n            cout << "DATA " << endl;\n            cout << "data : " << ptr -> data << endl;\n            cout << endl;\n            ptr = ptr -> next;\n            index++;\n        }\n        cout << "Index " << index << endl;\n        cout << "DATA " << endl;\n        cout << "data : " << ptr -> data << endl;\n        cout << endl;\n        return start;\n    }\n    \n    int main(int argc, char *argv[]) {\n        cout << "OPERATION LIST" << endl;\n        start = add_new_node(start, 32);\n        start = add_new_node(start, 3323);\n        \n        start = display(start);\n        return 0;\n    };\n        	2022-07-06 11:39:43.076+00	2022-07-06 11:40:01.307+00	18
16	\n    #include <stdio.h>\n    #include <stdlib.h>\n    #include <malloc.h>\n    #include <iostream>\n    #include <string>\n    using namespace std;\n    \n    struct Test {\n        Test* next;\n        Test* prev;\n        int data;\n    };\n\n    struct Test *start = NULL;\n    \n    struct Test *add_new_node(struct Test *start, int data)\n    {\n        Test *new_node, *ptr;\n\n        new_node = (struct Test*)malloc(sizeof(struct Test));\n        new_node -> data = data;\n        ptr = start;\n\n        if (start != NULL) {\n            while(ptr -> next != NULL) {\n                ptr = ptr -> next;\n            }\n\n            new_node -> prev = ptr;\n            ptr -> next = new_node;\n            new_node -> next = NULL;\n        } else {\n            new_node -> next = NULL;\n            new_node -> prev = NULL;\n            start = new_node;\n        }\n        cout << "- Adding new node" << endl;\n        return start;\n    }\n    \n    struct Test *search_data_by_data(struct Test *start, int data)\n    {\n        Test *ptr;\n        ptr = start;\n        int index = 0;\n        cout << "- Seach node" << endl;\n        while (ptr != NULL) \n        { \n            if (ptr -> data == data) {\n                cout << " => data : " << data << endl;\n                cout << " => Node in index "<< index << endl;\n                return start;\n            }\n            ptr = ptr->next; \n            index++;\n        }\n        cout << " => data : " << data << endl;\n        cout << " => Node data not found" << endl;\n        return start; \n    }\n    \n    struct Test *display(struct Test *start)\n    {\n        struct Test *ptr;\n        int index = 0;\n        ptr = start;\n        cout << endl << "LINKED LIST RESULT :" << endl;\n        while(ptr != NULL) {\n            cout << "Index " << index << endl;\n            cout << "DATA " << endl;\n            cout << "data : " << ptr -> data << endl;\n            cout << endl;\n            ptr = ptr -> next;\n            index++;\n        }\n        return start;\n    }\n    \n    int main(int argc, char *argv[]) {\n        cout << "OPERATION LIST" << endl;\n        start = add_new_node(start, 33);\n        start = add_new_node(start, 34);\n        start = search_data_by_data(start, 33);\n        \n        start = display(start);\n        return 0;\n    };\n        	2022-07-06 11:39:16.354+00	2022-07-06 11:39:28.655+00	17
21		2022-07-07 07:25:13.943+00	2022-07-07 07:25:13.943+00	24
18		2022-07-07 04:40:51.144+00	2022-07-07 04:43:32.28+00	19
19	\n    #include <stdio.h>\n    #include <stdlib.h>\n    #include <malloc.h>\n    #include <iostream>\n    #include <string>\n    using namespace std;\n    \n    struct Data {\n        Data* next;\n        int test;\n    };\n\n    struct Data *start = NULL;\n    \n    struct Data *add_new_node(struct Data *start, int test)\n    {\n        Data *new_node, *ptr;\n\n        new_node = (struct Data*)malloc(sizeof(struct Data));\n        new_node -> test = test;\n        ptr = start;\n\n        if (start != NULL) {\n            while(ptr -> next != NULL) {\n                ptr = ptr -> next;\n            }\n\n            ptr -> next = new_node;\n            new_node -> next = NULL;\n        } else {\n            new_node -> next = NULL;\n            start = new_node;\n        }\n        cout << "- Adding new node" << endl;\n        return start;\n    }\n    \n    struct Data *display(struct Data *start)\n    {\n        struct Data *ptr;\n        int index = 0;\n        ptr = start;\n        cout << endl << "LINKED LIST RESULT :" << endl;\n        while(ptr != NULL) {\n            cout << "Index " << index << endl;\n            cout << "DATA " << endl;\n            cout << "test : " << ptr -> test << endl;\n            cout << endl;\n            ptr = ptr -> next;\n            index++;\n        }\n        return start;\n    }\n    \n    int main(int argc, char *argv[]) {\n        cout << "OPERATION LIST" << endl;\n        start = add_new_node(start, 3232);\n        \n        start = display(start);\n        return 0;\n    };\n        	2022-07-07 05:52:06.891+00	2022-07-07 05:52:17.588+00	23
22	\n    #include <stdio.h>\n    #include <stdlib.h>\n    #include <malloc.h>\n    #include <iostream>\n    #include <string>\n    using namespace std;\n    \n    struct Mahasiswa {\n        Mahasiswa* next;\n        string nama;\n    };\n\n    struct Mahasiswa *start = NULL;\n    \n    struct Mahasiswa *add_new_node(struct Mahasiswa *start, string nama)\n    {\n        Mahasiswa *new_node, *ptr;\n\n        new_node = (struct Mahasiswa*)malloc(sizeof(struct Mahasiswa));\n        new_node -> nama = nama;\n        ptr = start;\n\n        if (start != NULL) {\n            while(ptr -> next != NULL) {\n                ptr = ptr -> next;\n            }\n\n            ptr -> next = new_node;\n            new_node -> next = NULL;\n        } else {\n            new_node -> next = NULL;\n            start = new_node;\n        }\n        cout << "- Adding new node" << endl;\n        return start;\n    }\n    \n    struct Mahasiswa *display(struct Mahasiswa *start)\n    {\n        struct Mahasiswa *ptr;\n        int index = 0;\n        ptr = start;\n        cout << endl << "LINKED LIST RESULT :" << endl;\n        while(ptr != NULL) {\n            cout << "Index " << index << endl;\n            cout << "DATA " << endl;\n            cout << "nama : " << ptr -> nama << endl;\n            cout << endl;\n            ptr = ptr -> next;\n            index++;\n        }\n        return start;\n    }\n    \n    int main(int argc, char *argv[]) {\n        cout << "OPERATION LIST" << endl;\n        start = add_new_node(start, "dasd");\n        start = add_new_node(start, "sads");\n        start = add_new_node(start, "dasd");\n        \n        start = display(start);\n        return 0;\n    };\n        	2022-07-07 07:31:07.91+00	2022-07-07 07:31:19.793+00	26
23	\n    #include <stdio.h>\n    #include <stdlib.h>\n    #include <malloc.h>\n    #include <iostream>\n    #include <string>\n    using namespace std;\n    \n    struct Asolole {\n        Asolole* next;\n        int data;\n        string nama;\n    };\n\n    struct Asolole *start = NULL;\n    \n    struct Asolole *add_new_node(struct Asolole *start, int data, string nama)\n    {\n        Asolole *new_node, *ptr;\n\n        new_node = (struct Asolole*)malloc(sizeof(struct Asolole));\n        new_node -> data = data;\n        new_node -> nama = nama;\n        ptr = start;\n\n        if (start != NULL) {\n            while(ptr -> next != NULL) {\n                ptr = ptr -> next;\n            }\n\n            ptr -> next = new_node;\n            new_node -> next = NULL;\n        } else {\n            new_node -> next = NULL;\n            start = new_node;\n        }\n        cout << "- Adding new node" << endl;\n        return start;\n    }\n    \n    struct Asolole *insert_before_index(struct Asolole *start, int index, int data, string nama)\n    {\n        Asolole *new_node, *ptr;\n\n    \tnew_node = (struct Asolole *)malloc(sizeof(struct Asolole));\n    \tnew_node -> data = data;\n        new_node -> nama = nama;\n    \t\n    \tif(index < 1) {\n    \t    new_node -> next = start;\n    \t    start = new_node;\n    \t    \n    \t} else {\n    \t    ptr = start;\n    \t    for (int i = 0; i < index - 1; i++) {\n    \t        ptr = ptr -> next;\n    \t    }\n    \t    \n    \t    new_node -> next = ptr -> next;\n    \t    ptr -> next = new_node;\n    \t}\n        cout << "- Insert node before index " << index << endl;\n    \treturn start;\n    }\n    \n    struct Asolole *insert_after_index(struct Asolole  *start, int index, int data, string nama)\n    {\n        Asolole  *new_node, *ptr;\n\n    \tnew_node = (struct Asolole  *)malloc(sizeof(struct Asolole ));\n    \tnew_node -> data = data;\n        new_node -> nama = nama;\n    \t\n    \tptr = start;\n    \tfor (int i = 0; i < index; i++) {\n    \t    ptr = ptr -> next;\n    \t}\n    \t\n    \tnew_node -> next = ptr -> next;\n    \tptr -> next = new_node;\n        cout << "- Insert node after index " << index << endl;\n    \treturn start;\n    }\n    \n    struct Asolole *delete_in_index(struct Asolole *start, int index)\n    {\n        Asolole *ptr;\n        ptr = start;\n\n        if (index < 1) {\n            start = ptr -> next;\n            ptr -> next = NULL;\n            free(ptr);\n        } else {\n            for(int i = 0; i < index-1; i++) {\n                ptr = ptr -> next;\n            }\n            Asolole *deleteNode = ptr -> next;\n            ptr -> next = ptr -> next -> next;\n            deleteNode -> next = NULL;\n            free(deleteNode);\n        }\n        cout << "- Delete node in index " << index << endl;\n        return start;\n    }\n    \n    struct Asolole *display(struct Asolole *start)\n    {\n        struct Asolole *ptr;\n        int index = 0;\n        ptr = start;\n        cout << endl << "LINKED LIST RESULT :" << endl;\n        while(ptr != NULL) {\n            cout << "Index " << index << endl;\n            cout << "DATA " << endl;\n            cout << "data : " << ptr -> data << endl;\n            cout << "nama : " << ptr -> nama << endl;\n            cout << endl;\n            ptr = ptr -> next;\n            index++;\n        }\n        return start;\n    }\n    \n    int main(int argc, char *argv[]) {\n        cout << "OPERATION LIST" << endl;\n        start = add_new_node(start, 312312, "dasdas");\n        start = insert_before_index(start, 0, 332, "asdasdqw");\n        start = insert_after_index(start, 1, 231, "dds");\n        start = delete_in_index(start, 2);\n        \n        start = display(start);\n        return 0;\n    };\n        	2022-07-10 03:54:23.929+00	2022-07-10 03:56:11.557+00	27
24	\n    #include <stdio.h>\n    #include <stdlib.h>\n    #include <malloc.h>\n    #include <iostream>\n    #include <string>\n    using namespace std;\n    \n    struct Dataewq {\n        Dataewq* next;\n        Dataewq* prev;\n        int eqweq;\n        float asdasd;\n    };\n\n    struct Dataewq *start = NULL;\n    \n    struct Dataewq *add_new_node(struct Dataewq *start, int eqweq, float asdasd)\n    {\n        Dataewq *new_node, *ptr;\n\n        new_node = (struct Dataewq*)malloc(sizeof(struct Dataewq));\n        new_node -> eqweq = eqweq;\n        new_node -> asdasd = asdasd;\n        ptr = start;\n\n        if (start != NULL) {\n            while(ptr -> next != NULL) {\n                ptr = ptr -> next;\n            }\n\n            new_node -> prev = ptr;\n            ptr -> next = new_node;\n            new_node -> next = NULL;\n        } else {\n            new_node -> next = NULL;\n            new_node -> prev = NULL;\n            start = new_node;\n        }\n        cout << "- Adding new node" << endl;\n        return start;\n    }\n    \n    struct Dataewq *insert_after_index(struct Dataewq  *start, int index, int eqweq, float asdasd)\n    {\n        Dataewq  *new_node, *ptr;\n\n    \tnew_node = (struct Dataewq  *)malloc(sizeof(struct Dataewq ));\n    \tnew_node -> eqweq = eqweq;\n        new_node -> asdasd = asdasd;\n    \t\n    \tptr = start;\n    \tfor (int i = 0; i < index; i++) {\n    \t    ptr = ptr -> next;\n    \t}\n    \t\n    \tnew_node -> next = ptr -> next;\n        new_node -> prev = ptr;\n        ptr -> next = new_node;\n        ptr -> next -> prev = new_node;\n        cout << "- Insert node after index " << index << endl;\n    \treturn start;\n    }\n    \n    struct Dataewq *display(struct Dataewq *start)\n    {\n        struct Dataewq *ptr;\n        int index = 0;\n        ptr = start;\n        cout << endl << "LINKED LIST RESULT :" << endl;\n        while(ptr != NULL) {\n            cout << "Index " << index << endl;\n            cout << "DATA " << endl;\n            cout << "eqweq : " << ptr -> eqweq << endl;\n            cout << "asdasd : " << ptr -> asdasd << endl;\n            cout << endl;\n            ptr = ptr -> next;\n            index++;\n        }\n        return start;\n    }\n    \n    int main(int argc, char *argv[]) {\n        cout << "OPERATION LIST" << endl;\n        start = add_new_node(start, 321312, 1231231);\n        start = insert_after_index(start, 0, 3233, 21312);\n        \n        start = display(start);\n        return 0;\n    };\n        	2022-07-10 03:56:33.155+00	2022-07-10 03:57:05.923+00	28
25	\n    #include <stdio.h>\n    #include <stdlib.h>\n    #include <malloc.h>\n    #include <iostream>\n    #include <string>\n    using namespace std;\n    \n    struct Andasd {\n        Andasd* next;\n        double qweqw;\n    };\n\n    struct Andasd *start = NULL;\n    \n    struct Andasd *add_new_node (struct Andasd *start, double qweqw)\n    {\n        Andasd *new_node, *ptr;\n\n        new_node = (struct Andasd*)malloc(sizeof(struct Andasd));\n        new_node -> qweqw = qweqw;\n        ptr = start;\n\n        if (start != NULL) {\n            while(ptr -> next != start) {\n                ptr = ptr -> next;\n            }\n\n            ptr -> next = new_node;\n            new_node -> next = start;\n        } else {\n            new_node -> next = new_node;\n            start = new_node;\n        }\n        cout << "- Adding new node" << endl;\n        return start;\n    }\n    \n    struct Andasd *insert_before_index(struct Andasd *start, int index, double qweqw)\n    {\n        Andasd *new_node, *ptr;\n\n    \tnew_node = (struct Andasd *)malloc(sizeof(struct Andasd));\n    \tnew_node -> qweqw = qweqw;\n        ptr = start;\n        \n        if (start == NULL) {\n            new_node -> next = new_node;\n            start = new_node;\n            return start;\n        }\n    \tif (index < 1) {\n    \t    new_node -> next = start;\n            while (ptr -> next != start) {\n    \t        ptr = ptr -> next;\n    \t    }\n    \t    ptr -> next = new_node;\n            start = new_node;\n            \n    \t} else {\n    \t    for (int i = 0; i < index - 1; i++) {\n    \t        ptr = ptr -> next;\n    \t    }\n    \t    \n    \t    new_node -> next = ptr -> next;\n    \t    ptr -> next = new_node;\n    \t}\n        cout << "- Insert node before index " << index << endl;\n    \treturn start;\n    }\n    \n    struct Andasd *display(struct Andasd *start)\n    {\n        struct Andasd *ptr;\n        int index = 0;\n        ptr = start;\n        cout << endl << "LINKED LIST RESULT :" << endl;\n        while(ptr -> next != start) {\n            cout << "Index " << index << endl;\n            cout << "DATA " << endl;\n            cout << "qweqw : " << ptr -> qweqw << endl;\n            cout << endl;\n            ptr = ptr -> next;\n            index++;\n        }\n        cout << "Index " << index << endl;\n        cout << "DATA " << endl;\n        cout << "qweqw : " << ptr -> qweqw << endl;\n        cout << endl;\n        return start;\n    }\n    \n    int main(int argc, char *argv[]) {\n        cout << "OPERATION LIST" << endl;\n        start = add_new_node(start, 123213);\n        start = insert_before_index(start, 0, 21312);\n        \n        start = display(start);\n        return 0;\n    };\n        	2022-07-10 03:57:35.215+00	2022-07-10 03:57:48.723+00	29
28	\n    #include <stdio.h>\n    #include <stdlib.h>\n    #include <malloc.h>\n    #include <iostream>\n    #include <string>\n    using namespace std;\n    \n    struct Data {\n        Data* next;\n        Data* prev;\n        int ewqeqw;\n    };\n\n    struct Data *start = NULL;\n    \n    struct Data *add_new_node(struct Data *start, int ewqeqw)\n    {\n        Data *new_node, *ptr;\n\n        new_node = (struct Data*)malloc(sizeof(struct Data));\n        new_node -> ewqeqw = ewqeqw;\n        ptr = start;\n\n        if (start != NULL) {\n            while(ptr -> next != NULL) {\n                ptr = ptr -> next;\n            }\n\n            new_node -> prev = ptr;\n            ptr -> next = new_node;\n            new_node -> next = NULL;\n        } else {\n            new_node -> next = NULL;\n            new_node -> prev = NULL;\n            start = new_node;\n        }\n        cout << "- Adding new node" << endl;\n        return start;\n    }\n    \n    struct Data *display(struct Data *start)\n    {\n        struct Data *ptr;\n        int index = 0;\n        ptr = start;\n        cout << endl << "LINKED LIST RESULT :" << endl;\n        while(ptr != NULL) {\n            cout << "Index " << index << endl;\n            cout << "DATA " << endl;\n            cout << "ewqeqw : " << ptr -> ewqeqw << endl;\n            cout << endl;\n            ptr = ptr -> next;\n            index++;\n        }\n        return start;\n    }\n    \n    int main(int argc, char *argv[]) {\n        cout << "OPERATION LIST" << endl;\n        start = add_new_node(start, 12312);\n        start = add_new_node(start, 312);\n        \n        start = display(start);\n        return 0;\n    };\n        	2022-07-10 04:20:04.628+00	2022-07-10 04:21:04.593+00	32
27	\n    #include <stdio.h>\n    #include <stdlib.h>\n    #include <malloc.h>\n    #include <iostream>\n    #include <string>\n    using namespace std;\n    \n    struct Wewewe {\n        Wewewe* next;\n        int sdawwa;\n    };\n\n    struct Wewewe *start = NULL;\n    \n    struct Wewewe *add_new_node(struct Wewewe *start, int sdawwa)\n    {\n        Wewewe *new_node, *ptr;\n\n        new_node = (struct Wewewe*)malloc(sizeof(struct Wewewe));\n        new_node -> sdawwa = sdawwa;\n        ptr = start;\n\n        if (start != NULL) {\n            while(ptr -> next != NULL) {\n                ptr = ptr -> next;\n            }\n\n            ptr -> next = new_node;\n            new_node -> next = NULL;\n        } else {\n            new_node -> next = NULL;\n            start = new_node;\n        }\n        cout << "- Adding new node" << endl;\n        return start;\n    }\n    \n    struct Wewewe *insert_before_index(struct Wewewe *start, int index, int sdawwa)\n    {\n        Wewewe *new_node, *ptr;\n\n    \tnew_node = (struct Wewewe *)malloc(sizeof(struct Wewewe));\n    \tnew_node -> sdawwa = sdawwa;\n    \t\n    \tif(index < 1) {\n    \t    new_node -> next = start;\n    \t    start = new_node;\n    \t    \n    \t} else {\n    \t    ptr = start;\n    \t    for (int i = 0; i < index - 1; i++) {\n    \t        ptr = ptr -> next;\n    \t    }\n    \t    \n    \t    new_node -> next = ptr -> next;\n    \t    ptr -> next = new_node;\n    \t}\n        cout << "- Insert node before index " << index << endl;\n    \treturn start;\n    }\n    \n    struct Wewewe *search_data_by_sdawwa(struct Wewewe *start, int sdawwa)\n    {\n        Wewewe *ptr;\n        ptr = start;\n        int index = 0;\n        cout << "- Seach node" << endl;\n        while (ptr != NULL) \n        { \n            if (ptr -> sdawwa == sdawwa) {\n                cout << " => sdawwa : " << sdawwa << endl;\n                cout << " => Node in index "<< index << endl;\n                return start;\n            }\n            ptr = ptr->next; \n            index++;\n        }\n        cout << " => sdawwa : " << sdawwa << endl;\n        cout << " => Node data not found" << endl;\n        return start; \n    }\n    \n    struct Wewewe *display(struct Wewewe *start)\n    {\n        struct Wewewe *ptr;\n        int index = 0;\n        ptr = start;\n        cout << endl << "LINKED LIST RESULT :" << endl;\n        while(ptr != NULL) {\n            cout << "Index " << index << endl;\n            cout << "DATA " << endl;\n            cout << "sdawwa : " << ptr -> sdawwa << endl;\n            cout << endl;\n            ptr = ptr -> next;\n            index++;\n        }\n        return start;\n    }\n    \n    int main(int argc, char *argv[]) {\n        cout << "OPERATION LIST" << endl;\n        start = add_new_node(start, 32123);\n        start = add_new_node(start, 3);\n        start = insert_before_index(start, 1, 2);\n        start = search_data_by_sdawwa(start, 3);\n        start = add_new_node(start, 2332);\n        \n        start = display(start);\n        return 0;\n    };\n        	2022-07-10 04:19:11.339+00	2022-07-10 04:21:09.296+00	31
26	\n    #include <stdio.h>\n    #include <stdlib.h>\n    #include <malloc.h>\n    #include <iostream>\n    #include <string>\n    using namespace std;\n    \n    struct Asolol {\n        Asolol* next;\n        int data;\n    };\n\n    struct Asolol *start = NULL;\n    \n    struct Asolol *add_new_node (struct Asolol *start, int data)\n    {\n        Asolol *new_node, *ptr;\n\n        new_node = (struct Asolol*)malloc(sizeof(struct Asolol));\n        new_node -> data = data;\n        ptr = start;\n\n        if (start != NULL) {\n            while(ptr -> next != start) {\n                ptr = ptr -> next;\n            }\n\n            ptr -> next = new_node;\n            new_node -> next = start;\n        } else {\n            new_node -> next = new_node;\n            start = new_node;\n        }\n        cout << "- Adding new node" << endl;\n        return start;\n    }\n    \n    struct Asolol  *insert_after_index(struct Asolol  *start, int index, int data)\n    {\n        Asolol  *new_node, *ptr;\n\n    \tnew_node = (struct Asolol  *)malloc(sizeof(struct Asolol ));\n    \tnew_node -> data = data;\n    \t\n        if (start == NULL) {\n            new_node -> next = new_node;\n            start = new_node;\n            return start;\n        }\n\n    \tptr = start;\n    \tfor (int i = 0; i < index; i++) {\n    \t    ptr = ptr -> next;\n    \t}\n    \tnew_node -> next = ptr -> next;\n    \tptr -> next = new_node;\n        cout << "- Insert node after index " << index << endl;\n    \treturn start;\n    }\n    \n    struct Asolol *insert_before_index(struct Asolol *start, int index, int data)\n    {\n        Asolol *new_node, *ptr;\n\n    \tnew_node = (struct Asolol *)malloc(sizeof(struct Asolol));\n    \tnew_node -> data = data;\n        ptr = start;\n        \n        if (start == NULL) {\n            new_node -> next = new_node;\n            start = new_node;\n            return start;\n        }\n    \tif (index < 1) {\n    \t    new_node -> next = start;\n            while (ptr -> next != start) {\n    \t        ptr = ptr -> next;\n    \t    }\n    \t    ptr -> next = new_node;\n            start = new_node;\n            \n    \t} else {\n    \t    for (int i = 0; i < index - 1; i++) {\n    \t        ptr = ptr -> next;\n    \t    }\n    \t    \n    \t    new_node -> next = ptr -> next;\n    \t    ptr -> next = new_node;\n    \t}\n        cout << "- Insert node before index " << index << endl;\n    \treturn start;\n    }\n    \n    struct Asolol *display(struct Asolol *start)\n    {\n        struct Asolol *ptr;\n        int index = 0;\n        ptr = start;\n        cout << endl << "LINKED LIST RESULT :" << endl;\n        while(ptr -> next != start) {\n            cout << "Index " << index << endl;\n            cout << "DATA " << endl;\n            cout << "data : " << ptr -> data << endl;\n            cout << endl;\n            ptr = ptr -> next;\n            index++;\n        }\n        cout << "Index " << index << endl;\n        cout << "DATA " << endl;\n        cout << "data : " << ptr -> data << endl;\n        cout << endl;\n        return start;\n    }\n    \n    int main(int argc, char *argv[]) {\n        cout << "OPERATION LIST" << endl;\n        start = add_new_node(start, 3232);\n        start = insert_after_index(start, 0, 32);\n        start = insert_before_index(start, 0, 3232);\n        start = insert_before_index(start, 1, 43);\n        \n        start = display(start);\n        return 0;\n    };\n        	2022-07-10 04:16:34.305+00	2022-07-10 04:17:50.189+00	30
38		2022-07-11 08:32:08.096+00	2022-07-11 08:32:08.096+00	44
20	\n    #include <stdio.h>\n    #include <stdlib.h>\n    #include <malloc.h>\n    #include <iostream>\n    #include <string>\n    using namespace std;\n    \n    struct mahasiswa {\n        mahasiswa* next;\n        mahasiswa* prev;\n        int nrp;\n    };\n\n    struct mahasiswa *start = NULL;\n    \n    struct mahasiswa *add_new_node(struct mahasiswa *start, int nrp)\n    {\n        mahasiswa *new_node, *ptr;\n\n        new_node = (struct mahasiswa*)malloc(sizeof(struct mahasiswa));\n        new_node -> nrp = nrp;\n        ptr = start;\n\n        if (start != NULL) {\n            while(ptr -> next != NULL) {\n                ptr = ptr -> next;\n            }\n\n            new_node -> prev = ptr;\n            ptr -> next = new_node;\n            new_node -> next = NULL;\n        } else {\n            new_node -> next = NULL;\n            new_node -> prev = NULL;\n            start = new_node;\n        }\n        cout << "- Adding new node" << endl;\n        return start;\n    }\n    \n    struct mahasiswa *display(struct mahasiswa *start)\n    {\n        struct mahasiswa *ptr;\n        int index = 0;\n        ptr = start;\n        cout << endl << "LINKED LIST RESULT :" << endl;\n        while(ptr != NULL) {\n            cout << "Index " << index << endl;\n            cout << "DATA " << endl;\n            cout << "nrp : " << ptr -> nrp << endl;\n            cout << endl;\n            ptr = ptr -> next;\n            index++;\n        }\n        return start;\n    }\n    \n    int main(int argc, char *argv[]) {\n        cout << "OPERATION LIST" << endl;\n        start = add_new_node(start, 123);\n        start = add_new_node(start, 223);\n        start = add_new_node(start, 1123);\n        \n        start = display(start);\n        return 0;\n    };\n        	2022-07-07 07:24:45.388+00	2022-07-11 08:23:59.26+00	25
39		2022-07-11 08:32:30.305+00	2022-07-11 08:32:30.305+00	45
37	\n    #include <stdio.h>\n    #include <stdlib.h>\n    #include <malloc.h>\n    #include <iostream>\n    #include <string>\n    using namespace std;\n    \n    struct das {\n        das* next;\n        das* prev;\n        int Dsaqw;\n    };\n\n    struct das *start = NULL;\n    \n    struct das *add_new_node(struct das *start, int Dsaqw)\n    {\n        das *new_node, *ptr;\n\n        new_node = (struct das*)malloc(sizeof(struct das));\n        new_node -> Dsaqw = Dsaqw;\n        ptr = start;\n\n        if (start != NULL) {\n            while(ptr -> next != NULL) {\n                ptr = ptr -> next;\n            }\n\n            new_node -> prev = ptr;\n            ptr -> next = new_node;\n            new_node -> next = NULL;\n        } else {\n            new_node -> next = NULL;\n            new_node -> prev = NULL;\n            start = new_node;\n        }\n        cout << "- Adding new node" << endl;\n        return start;\n    }\n    \n    struct das *insert_before_index(struct das *start, int index, int Dsaqw)\n    {\n        das *new_node, *ptr;\n\n    \tnew_node = (struct das *)malloc(sizeof(struct das));\n    \tnew_node -> Dsaqw = Dsaqw;\n    \t\n    \tif(index < 1) {\n    \t    new_node -> next = start;\n            new_node -> prev = start -> prev;\n    \t    start = new_node;\n    \t    \n    \t} else {\n    \t    ptr = start;\n    \t    for (int i = 0; i < index - 1; i++) {\n    \t        ptr = ptr -> next;\n    \t    }\n    \t    \n    \t    new_node -> next = ptr -> next;\n            new_node -> prev = ptr;\n    \t    ptr -> next = new_node;\n            ptr -> next -> prev = new_node;\n    \t}\n        cout << "- Insert node before index " << index << endl;\n    \treturn start;\n    }\n    \n    struct das *display(struct das *start)\n    {\n        struct das *ptr;\n        int index = 0;\n        ptr = start;\n        cout << endl << "LINKED LIST RESULT :" << endl;\n        while(ptr != NULL) {\n            cout << "Index " << index << endl;\n            cout << "DATA " << endl;\n            cout << "Dsaqw : " << ptr -> Dsaqw << endl;\n            cout << endl;\n            ptr = ptr -> next;\n            index++;\n        }\n        return start;\n    }\n    \n    int main(int argc, char *argv[]) {\n        cout << "OPERATION LIST" << endl;\n        start = add_new_node(start, 123);\n        start = insert_before_index(start, 0, 323);\n        \n        start = display(start);\n        return 0;\n    };\n        	2022-07-10 14:12:09.937+00	2022-07-10 14:12:20.107+00	42
40		2022-07-11 08:32:50.468+00	2022-07-11 08:32:50.468+00	46
\.


--
-- Data for Name: feedbacks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.feedbacks (id, question, type, "createdAt", "updatedAt") FROM stdin;
1	universitas	line	2022-07-05 12:33:27.299+00	2022-07-05 12:33:27.299+00
2	Program Studi	line	2022-07-05 12:33:37.508+00	2022-07-05 12:33:37.508+00
3	Semester	line	2022-07-05 12:33:44.604+00	2022-07-05 12:33:44.604+00
4	Apakah tutorial yang muncul mengenai website mudah untuk dipahami?	scale	2022-07-05 14:19:41.333+00	2022-07-05 14:19:41.333+00
5	Apakah tampilan dari halaman mudah untuk dipahami?	scale	2022-07-05 14:20:21.311+00	2022-07-05 14:20:21.311+00
6	Apakah menurut anda visualisasi dari linked list sesuai dengan konsep dan mudah untuk dipahami?	scale	2022-07-05 14:20:36.252+00	2022-07-05 14:20:36.252+00
7	Apakah terdapat tools untuk operasi linked-list yang sulit untuk dipahami dan dijalankan?	scale	2022-07-05 14:20:57.709+00	2022-07-05 14:20:57.709+00
8	Jika ada, tools apakah yang sulit untuk dipahami?	line	2022-07-05 14:21:23.657+00	2022-07-05 14:21:23.657+00
9	Apakah tools yang tersedia sudah cukup untuk operasi yang terdapat pada linked list?	scale	2022-07-05 14:21:44.365+00	2022-07-05 14:21:44.365+00
10	Jika belum, tools apa yang anda rekomendasikan untuk ditambahkan?	line	2022-07-05 14:21:55.204+00	2022-07-05 14:21:55.204+00
11	Apakah pseudocode yang ditampilkan mudah untuk dipahami?	scale	2022-07-05 14:22:07.721+00	2022-07-05 14:22:07.721+00
12	Apakah penjelasan pseudocode yang ditampilkan mudah untuk dipahami?	scale	2022-07-05 14:22:34.034+00	2022-07-05 14:22:34.034+00
13	Apakah source code yang ter-generate dapat digunakan dan berfungsi dengan baik?	scale	2022-07-05 14:22:43.47+00	2022-07-05 14:22:43.47+00
14	Apakah dengan membuat visualisasi linked list, pembelajaran struktur data menjadi lebih menarik menurut anda?	scale	2022-07-05 14:23:28.894+00	2022-07-05 14:23:28.894+00
15	Apakah materi yang terdapat pada website sudah sesuai dengan materi struktur data linked list yang pernah diajarkan?	scale	2022-07-05 14:23:37.271+00	2022-07-05 14:23:37.271+00
16	Apakah materi yang terdapat pada website mudah untuk dipahami?	scale	2022-07-05 14:24:05.76+00	2022-07-05 14:24:05.76+00
17	Apakah dengan membuat visualisasi linked-list, membuat anda lebih tertarik untuk mempelajari linked list daripada menggunakan buku atau modul?	scale	2022-07-05 14:24:21.249+00	2022-07-05 14:24:21.249+00
18	Fitur apakah yang paling menarik atau paling membantu dalam visualisakikan linked list?	line	2022-07-05 14:26:21.428+00	2022-07-05 14:26:21.428+00
19	Apakah terdapat fitur yang sulit untuk dipahami? Jika ada, jelaskan bagian fitur yang sulit untuk dipahami	line	2022-07-05 14:26:51.882+00	2022-07-05 14:26:51.882+00
20	Apakah selama mencoba website interactive linked-list, anda mengalami kesulitan? Jika ada, bagian apakah yang sulit anda pahami?	line	2022-07-05 14:27:16.613+00	2022-07-05 14:27:16.613+00
21	Apakah fitur yang terdapat pada website lebih mudah dipahami daripada website visualisasi yang lain seperti visualgo?	scale	2022-07-05 14:27:49.958+00	2022-07-05 14:27:49.958+00
22	Apakah fitur yang terdapat pada website lebih menarik daripada aplikasi visualisasi stuktur data yang lain seperti visualgo?	scale	2022-07-05 14:28:10.048+00	2022-07-05 14:28:10.048+00
23	Dari segi materi linked list, apakah tool dan fitur yang tersedia lebih lengkap dari visualgo?	scale	2022-07-05 14:28:18.253+00	2022-07-05 14:28:18.253+00
24	Menurut anda apakah kelebihan dari website yang tidak terdapat pada visualgo atau website visualisasi data yang lain?	line	2022-07-05 14:28:31.172+00	2022-07-05 14:28:31.172+00
25	Menurut anda apakah kekurangan dari website jika dibandingkan dengan website visualgo atau website visualiasi data yang lain?	line	2022-07-05 14:28:42.778+00	2022-07-05 14:28:42.778+00
26	Saran atau masukan yang anda berikan untuk website interaktif linked list	line	2022-07-05 14:29:21.575+00	2022-07-05 14:29:21.575+00
\.


--
-- Data for Name: lists; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lists (id, type, "createdAt", "updatedAt", "userId") FROM stdin;
1	double	2022-07-04 15:27:39.164+00	2022-07-04 15:27:39.164+00	\N
2	single	2022-07-05 10:22:10.8+00	2022-07-05 10:22:10.8+00	\N
3	double	2022-07-05 11:42:07.468+00	2022-07-05 11:42:07.468+00	\N
9	double	2022-07-06 06:21:58.282+00	2022-07-06 06:21:58.282+00	8
10	single	2022-07-06 08:18:51.799+00	2022-07-06 08:18:51.799+00	9
11	single	2022-07-06 08:34:25.81+00	2022-07-06 08:34:25.81+00	10
12	single	2022-07-06 08:38:53.022+00	2022-07-06 08:38:53.022+00	11
13	single	2022-07-06 08:41:22.111+00	2022-07-06 08:41:22.111+00	12
14	single	2022-07-06 08:42:39.615+00	2022-07-06 08:42:39.615+00	12
16	single	2022-07-06 11:37:20.244+00	2022-07-06 11:37:20.244+00	14
17	double	2022-07-06 11:39:12.054+00	2022-07-06 11:39:12.054+00	14
18	circular	2022-07-06 11:39:37.351+00	2022-07-06 11:39:37.351+00	14
19	single	2022-07-07 04:40:08.836+00	2022-07-07 04:40:08.836+00	15
20	circular	2022-07-07 04:45:13.253+00	2022-07-07 04:45:13.253+00	15
21	double	2022-07-07 04:45:19.41+00	2022-07-07 04:45:19.41+00	15
22	single	2022-07-07 05:48:53.293+00	2022-07-07 05:48:53.293+00	16
23	single	2022-07-07 05:51:58.323+00	2022-07-07 05:51:58.323+00	5
24	circular	2022-07-07 07:24:23.898+00	2022-07-07 07:24:23.898+00	5
25	double	2022-07-07 07:24:26.647+00	2022-07-07 07:24:26.647+00	5
26	single	2022-07-07 07:30:22.786+00	2022-07-07 07:30:22.786+00	8
27	single	2022-07-10 03:54:09.929+00	2022-07-10 03:54:09.929+00	19
28	double	2022-07-10 03:56:21.579+00	2022-07-10 03:56:21.579+00	19
29	circular	2022-07-10 03:57:22.567+00	2022-07-10 03:57:22.567+00	19
30	circular	2022-07-10 04:16:24.78+00	2022-07-10 04:16:24.78+00	20
31	single	2022-07-10 04:17:57.564+00	2022-07-10 04:17:57.564+00	20
32	double	2022-07-10 04:19:57.257+00	2022-07-10 04:19:57.257+00	20
33	double	2022-07-10 04:48:10.547+00	2022-07-10 04:48:10.547+00	22
42	double	2022-07-10 14:11:40.444+00	2022-07-10 14:11:40.444+00	26
43	double	2022-07-11 08:22:58.846+00	2022-07-11 08:22:58.846+00	5
44	double	2022-07-11 08:32:03.223+00	2022-07-11 08:32:03.223+00	6
45	single	2022-07-11 08:32:12.073+00	2022-07-11 08:32:12.073+00	6
46	circular	2022-07-11 08:32:34.703+00	2022-07-11 08:32:34.703+00	6
\.


--
-- Data for Name: logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.logs (id, data, "createdAt", "updatedAt", "codeId") FROM stdin;
28	["add_new_node(start, 12312);","add_new_node(start, 312);"]	2022-07-10 04:20:05.042+00	2022-07-10 04:21:04.488+00	28
27	["add_new_node(start, 32123);","add_new_node(start, 3);","insert_before_index(start, 1, 2);","search_data_by_sdawwa(start, 3);","add_new_node(start, 2332);"]	2022-07-10 04:19:11.606+00	2022-07-10 04:21:09.285+00	27
1	["add_new_node(start, 312);","add_new_node(start, 4213);","insert_after_index(start, 1, 32);","search_data_by_jos(start, 32);","insert_before_index(start, 0, 213);"]	2022-07-04 15:27:48.416+00	2022-07-05 10:20:56.522+00	1
15	[]	2022-07-06 11:37:41.123+00	2022-07-06 11:39:07.982+00	15
16	["add_new_node(start, 33);","add_new_node(start, 34);","search_data_by_data(start, 33);"]	2022-07-06 11:39:16.554+00	2022-07-06 11:39:28.672+00	16
2	[]	2022-07-05 10:23:16.476+00	2022-07-05 10:26:13.775+00	2
3	[]	2022-07-05 11:46:35.914+00	2022-07-05 11:46:35.914+00	3
17	["add_new_node(start, 32);","add_new_node(start, 3323);"]	2022-07-06 11:39:43.284+00	2022-07-06 11:40:01.315+00	17
18	[]	2022-07-07 04:40:51.245+00	2022-07-07 04:43:32.277+00	18
37	["add_new_node(start, 123);","insert_before_index(start, 0, 323);"]	2022-07-10 14:12:10.132+00	2022-07-10 14:12:20.12+00	37
19	["add_new_node(start, 3232);"]	2022-07-07 05:52:07.088+00	2022-07-07 05:52:17.59+00	19
9	[]	2022-07-06 08:20:54.662+00	2022-07-06 08:23:59.103+00	9
21	[]	2022-07-07 07:25:14.191+00	2022-07-07 07:25:14.191+00	21
22	["add_new_node(start, \\"dasd\\");","add_new_node(start, \\"sads\\");","add_new_node(start, \\"dasd\\");"]	2022-07-07 07:31:08.122+00	2022-07-07 07:31:19.809+00	22
11	["add_new_node(start, \\"Bayu\\", 36);"]	2022-07-06 08:39:59.6+00	2022-07-06 08:40:37.999+00	11
10	[]	2022-07-06 08:36:14.462+00	2022-07-06 08:41:55.502+00	10
12	[]	2022-07-06 08:42:24.9+00	2022-07-06 08:42:24.9+00	12
20	["add_new_node(start, 123);","add_new_node(start, 223);","add_new_node(start, 1123);"]	2022-07-07 07:24:45.622+00	2022-07-11 08:23:59.268+00	20
13	["add_new_node(start, 1, \\"pijo\\", \\"munirah\\");","add_new_node(start, 2, \\"paijem\\", \\"munriah\\");","insert_before_index(start, 0, 3, \\"po\\", \\"ok\\");","delete_in_index(start, 0);"]	2022-07-06 08:43:15.414+00	2022-07-06 08:47:03.512+00	13
38	[]	2022-07-11 08:32:08.492+00	2022-07-11 08:32:08.492+00	38
23	["add_new_node(start, 312312, \\"dasdas\\");","insert_before_index(start, 0, 332, \\"asdasdqw\\");","insert_after_index(start, 1, 231, \\"dds\\");","delete_in_index(start, 2);"]	2022-07-10 03:54:24.218+00	2022-07-10 03:56:11.575+00	23
39	[]	2022-07-11 08:32:30.514+00	2022-07-11 08:32:30.514+00	39
24	["add_new_node(start, 321312, 1231231);","insert_after_index(start, 0, 3233, 21312);"]	2022-07-10 03:56:33.446+00	2022-07-10 03:57:05.927+00	24
40	[]	2022-07-11 08:32:50.802+00	2022-07-11 08:32:50.802+00	40
25	["add_new_node(start, 123213);","insert_before_index(start, 0, 21312);"]	2022-07-10 03:57:35.474+00	2022-07-10 03:57:48.929+00	25
26	["add_new_node(start, 3232);","insert_after_index(start, 0, 32);","insert_before_index(start, 0, 3232);","insert_before_index(start, 1, 43);"]	2022-07-10 04:16:34.756+00	2022-07-10 04:17:50.2+00	26
\.


--
-- Data for Name: nodes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.nodes (id, data, "createdAt", "updatedAt", "listId") FROM stdin;
25	[{"qweqw":"21312"},{"qweqw":"123213"}]	2022-07-10 03:57:36.213+00	2022-07-10 03:57:48.803+00	29
1	[{"jos":"213"},{"jos":"312"},{"jos":"4213"},{"jos":"32"}]	2022-07-04 15:27:49.224+00	2022-07-05 10:20:56.519+00	1
2	[]	2022-07-05 10:23:17.263+00	2022-07-05 10:26:21.473+00	2
3	[]	2022-07-05 11:46:56.226+00	2022-07-05 11:46:56.226+00	3
26	[{"data":"3232"},{"data":"43"},{"data":"3232"},{"data":"32"}]	2022-07-10 04:16:35.53+00	2022-07-10 04:17:50.217+00	30
9	[{"kelas":"GTB","nrp":"5221600058","nama":"Rayhan Lintang"}]	2022-07-06 08:21:01.749+00	2022-07-06 08:22:28.757+00	10
10	[{"namahero":"nobi","atk":"4","def":"56","kelas":"Tank"},{"namahero":"jonny","atk":"54","def":"2","kelas":"warrior"},{"namahero":"jono","atk":"43","def":"23","kelas":"Warrior"},{"namahero":"fero","atk":"23","def":"54","kelas":"warrior"}]	2022-07-06 08:36:14.881+00	2022-07-06 08:40:12.688+00	11
11	[{"Nama":"Bayu","Nrp":"36"}]	2022-07-06 08:40:00.22+00	2022-07-06 08:40:38.008+00	12
12	[]	2022-07-06 08:42:25.349+00	2022-07-06 08:42:25.349+00	13
13	[{"jmlh":"1","nama":"pijo","alamat":"munirah"},{"jmlh":"2","nama":"paijem","alamat":"munriah"}]	2022-07-06 08:43:15.73+00	2022-07-06 08:47:03.524+00	14
28	[{"ewqeqw":"12312"},{"ewqeqw":"312"}]	2022-07-10 04:20:05.86+00	2022-07-10 04:21:04.597+00	32
27	[{"sdawwa":"32123"},{"sdawwa":"2"},{"sdawwa":"3"},{"sdawwa":"2332"}]	2022-07-10 04:19:12.293+00	2022-07-10 04:21:09.294+00	31
15	[]	2022-07-06 11:37:41.74+00	2022-07-06 11:39:06.828+00	16
16	[{"data":"33"},{"data":"34"}]	2022-07-06 11:39:17.274+00	2022-07-06 11:39:26.41+00	17
17	[{"data":"32"},{"data":"3323"}]	2022-07-06 11:39:44.212+00	2022-07-06 11:40:01.309+00	18
18	[]	2022-07-07 04:40:51.534+00	2022-07-07 04:43:32.784+00	19
19	[{"test":"3232"}]	2022-07-07 05:52:07.71+00	2022-07-07 05:52:17.605+00	23
21	[]	2022-07-07 07:25:14.762+00	2022-07-07 07:25:14.762+00	24
22	[{"nama":"dasd"},{"nama":"sads"},{"nama":"dasd"}]	2022-07-07 07:31:08.737+00	2022-07-07 07:31:19.812+00	26
23	[{"data":"332","nama":"asdasdqw"},{"data":"312312","nama":"dasdas"}]	2022-07-10 03:54:25.049+00	2022-07-10 03:56:11.577+00	27
24	[{"eqweq":"321312","asdasd":"1231231"},{"eqweq":"3233","asdasd":"21312"}]	2022-07-10 03:56:34.179+00	2022-07-10 03:57:05.93+00	28
37	[{"Dsaqw":"323"},{"Dsaqw":"123"}]	2022-07-10 14:12:10.957+00	2022-07-10 14:12:20.128+00	42
20	[{"nrp":"123"},{"nrp":"223"},{"nrp":"1123"}]	2022-07-07 07:24:46.106+00	2022-07-11 08:23:59.287+00	25
38	[]	2022-07-11 08:32:09.215+00	2022-07-11 08:32:09.215+00	44
39	[]	2022-07-11 08:32:31.452+00	2022-07-11 08:32:31.452+00	45
40	[]	2022-07-11 08:32:52.529+00	2022-07-11 08:32:52.529+00	46
\.


--
-- Data for Name: operations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.operations (id, data, "createdAt", "updatedAt", "codeId") FROM stdin;
1	["add","after","searchjos","before"]	2022-07-04 15:27:48.705+00	2022-07-05 10:20:56.52+00	1
26	["add","after","before"]	2022-07-10 04:16:35.02+00	2022-07-10 04:17:42.326+00	26
2	[]	2022-07-05 10:23:16.749+00	2022-07-05 10:26:13.777+00	2
3	[]	2022-07-05 11:46:37.776+00	2022-07-05 11:46:37.776+00	3
37	["add","before"]	2022-07-10 14:12:10.5+00	2022-07-10 14:12:20.131+00	37
20	["add"]	2022-07-07 07:24:45.747+00	2022-07-11 08:23:53.093+00	20
38	[]	2022-07-11 08:32:08.691+00	2022-07-11 08:32:08.691+00	38
27	["add","before","searchsdawwa"]	2022-07-10 04:19:11.778+00	2022-07-10 04:19:42.078+00	27
39	[]	2022-07-11 08:32:30.739+00	2022-07-11 08:32:30.739+00	39
28	["add"]	2022-07-10 04:20:05.36+00	2022-07-10 04:20:38.352+00	28
9	[]	2022-07-06 08:20:57.105+00	2022-07-06 08:23:59.1+00	9
40	[]	2022-07-11 08:32:51.091+00	2022-07-11 08:32:51.091+00	40
11	["add"]	2022-07-06 08:39:59.805+00	2022-07-06 08:40:38.01+00	11
10	[]	2022-07-06 08:36:14.567+00	2022-07-06 08:41:55.489+00	10
12	[]	2022-07-06 08:42:25.047+00	2022-07-06 08:42:25.047+00	12
13	["add","before","delete"]	2022-07-06 08:43:15.516+00	2022-07-06 08:47:03.516+00	13
15	[]	2022-07-06 11:37:41.323+00	2022-07-06 11:39:07.981+00	15
16	["add","searchdata"]	2022-07-06 11:39:16.758+00	2022-07-06 11:39:28.627+00	16
17	["add"]	2022-07-06 11:39:43.484+00	2022-07-06 11:39:47.858+00	17
18	[]	2022-07-07 04:40:51.341+00	2022-07-07 04:43:32.282+00	18
19	["add"]	2022-07-07 05:52:07.292+00	2022-07-07 05:52:17.593+00	19
21	[]	2022-07-07 07:25:14.354+00	2022-07-07 07:25:14.354+00	21
22	["add"]	2022-07-07 07:31:08.33+00	2022-07-07 07:31:14.029+00	22
23	["add","before","after","delete"]	2022-07-10 03:54:24.437+00	2022-07-10 03:56:11.58+00	23
24	["add","after"]	2022-07-10 03:56:33.653+00	2022-07-10 03:57:05.925+00	24
25	["add","before"]	2022-07-10 03:57:35.706+00	2022-07-10 03:57:48.791+00	25
\.


--
-- Data for Name: question_answers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.question_answers ("createdAt", "updatedAt", "questionId", "answerId") FROM stdin;
2022-07-05 07:51:35.451+00	2022-07-05 07:51:35.451+00	1	1
2022-07-05 07:51:35.451+00	2022-07-05 07:51:35.451+00	1	2
2022-07-05 07:51:35.451+00	2022-07-05 07:51:35.451+00	1	3
2022-07-05 07:51:35.451+00	2022-07-05 07:51:35.451+00	1	4
2022-07-05 07:54:46.354+00	2022-07-05 07:54:46.354+00	2	5
2022-07-05 07:54:46.354+00	2022-07-05 07:54:46.354+00	2	8
2022-07-05 07:54:46.354+00	2022-07-05 07:54:46.354+00	2	7
2022-07-05 07:54:46.354+00	2022-07-05 07:54:46.354+00	2	6
2022-07-05 08:02:38.404+00	2022-07-05 08:02:38.404+00	3	11
2022-07-05 08:02:38.404+00	2022-07-05 08:02:38.404+00	3	10
2022-07-05 08:02:38.404+00	2022-07-05 08:02:38.404+00	3	9
2022-07-05 08:02:38.404+00	2022-07-05 08:02:38.404+00	3	12
2022-07-05 08:12:26.305+00	2022-07-05 08:12:26.305+00	4	13
2022-07-05 08:12:26.305+00	2022-07-05 08:12:26.305+00	4	14
2022-07-05 08:12:26.305+00	2022-07-05 08:12:26.305+00	4	16
2022-07-05 08:12:26.305+00	2022-07-05 08:12:26.305+00	4	15
2022-07-05 08:12:52.917+00	2022-07-05 08:12:52.917+00	5	20
2022-07-05 08:12:52.917+00	2022-07-05 08:12:52.917+00	5	18
2022-07-05 08:12:52.917+00	2022-07-05 08:12:52.917+00	5	17
2022-07-05 08:12:52.917+00	2022-07-05 08:12:52.917+00	5	19
2022-07-05 08:15:33.157+00	2022-07-05 08:15:33.157+00	6	21
2022-07-05 08:15:33.157+00	2022-07-05 08:15:33.157+00	6	24
2022-07-05 08:15:33.157+00	2022-07-05 08:15:33.157+00	6	22
2022-07-05 08:15:33.157+00	2022-07-05 08:15:33.157+00	6	23
2022-07-05 08:16:03.421+00	2022-07-05 08:16:03.421+00	7	27
2022-07-05 08:16:03.421+00	2022-07-05 08:16:03.421+00	7	26
2022-07-05 08:16:03.421+00	2022-07-05 08:16:03.421+00	7	25
2022-07-05 08:16:03.421+00	2022-07-05 08:16:03.421+00	7	28
2022-07-05 08:17:04.554+00	2022-07-05 08:17:04.554+00	8	4
2022-07-05 08:17:04.554+00	2022-07-05 08:17:04.554+00	8	2
2022-07-05 08:17:04.554+00	2022-07-05 08:17:04.554+00	8	3
2022-07-05 08:17:04.554+00	2022-07-05 08:17:04.554+00	8	1
2022-07-05 08:54:39.61+00	2022-07-05 08:54:39.61+00	9	31
2022-07-05 08:54:39.61+00	2022-07-05 08:54:39.61+00	9	32
2022-07-05 08:54:39.61+00	2022-07-05 08:54:39.61+00	9	30
2022-07-05 08:54:39.61+00	2022-07-05 08:54:39.61+00	9	29
2022-07-05 08:55:08.449+00	2022-07-05 08:55:08.449+00	10	34
2022-07-05 08:55:08.449+00	2022-07-05 08:55:08.449+00	10	33
2022-07-05 08:55:08.449+00	2022-07-05 08:55:08.449+00	10	36
2022-07-05 08:55:08.449+00	2022-07-05 08:55:08.449+00	10	35
2022-07-05 09:24:43.645+00	2022-07-05 09:24:43.645+00	11	39
2022-07-05 09:24:43.645+00	2022-07-05 09:24:43.645+00	11	38
2022-07-05 09:24:43.645+00	2022-07-05 09:24:43.645+00	11	37
2022-07-05 09:24:43.645+00	2022-07-05 09:24:43.645+00	11	40
2022-07-05 09:33:24.66+00	2022-07-05 09:33:24.66+00	12	42
2022-07-05 09:33:24.66+00	2022-07-05 09:33:24.66+00	12	41
2022-07-05 09:33:24.66+00	2022-07-05 09:33:24.66+00	12	43
2022-07-05 09:33:24.66+00	2022-07-05 09:33:24.66+00	12	44
2022-07-05 10:04:52.899+00	2022-07-05 10:04:52.899+00	13	47
2022-07-05 10:04:52.899+00	2022-07-05 10:04:52.899+00	13	45
2022-07-05 10:04:52.899+00	2022-07-05 10:04:52.899+00	13	46
2022-07-05 10:04:52.899+00	2022-07-05 10:04:52.899+00	13	48
2022-07-05 10:12:21.69+00	2022-07-05 10:12:21.69+00	14	49
2022-07-05 10:12:21.69+00	2022-07-05 10:12:21.69+00	14	50
2022-07-05 10:12:21.69+00	2022-07-05 10:12:21.69+00	14	51
2022-07-05 10:12:21.69+00	2022-07-05 10:12:21.69+00	14	52
2022-07-05 10:13:00.415+00	2022-07-05 10:13:00.415+00	15	43
2022-07-05 10:13:00.415+00	2022-07-05 10:13:00.415+00	15	54
2022-07-05 10:13:00.415+00	2022-07-05 10:13:00.415+00	15	55
2022-07-05 10:13:00.415+00	2022-07-05 10:13:00.415+00	15	56
\.


--
-- Data for Name: questions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.questions (id, question, "isCorrectId", "createdAt", "updatedAt") FROM stdin;
1	Suatu variabel yang digunakan untuk menyimpan alamat memori tempat sebuah variabel disimpan adalah?	1	2022-07-05 07:51:35.408+00	2022-07-05 07:51:35.408+00
2	Syntax deklarasi pointer pada bahasa C++ yang tepat adalah?	5	2022-07-05 07:54:46.296+00	2022-07-05 07:54:46.296+00
3	Syntax pembuatan tipe data struct dalam bahasa C++ yang tepat adalah?	9	2022-07-05 08:02:38.363+00	2022-07-05 08:02:38.363+00
4	Berikut adalah kegunaan dari struct yang tepat adalah?	9	2022-07-05 08:12:26.263+00	2022-07-05 08:12:26.263+00
5	Untuk mengakses node dalam linked list, dimulai dari head lalu bergeser ke node-node berikutnya bisanya digunakan ?	9	2022-07-05 08:12:52.879+00	2022-07-05 08:12:52.879+00
6	Berikut adalah kelebihan dari linked-list daripada array adalah?	24	2022-07-05 08:15:33.117+00	2022-07-05 08:15:33.117+00
7	Berikut adalah cara untuk menginisiasi single linked list yang tepat adalah?	25	2022-07-05 08:16:03.38+00	2022-07-05 08:16:03.38+00
8	Bentuk tipe data abstrak yang berisi kumpulan data yang tersusun secara sekuensial, saling bersambung, dan dinamis adalah?	3	2022-07-05 08:17:04.516+00	2022-07-05 08:17:04.516+00
9	Salah satu perbedaan antara single linked list dan double linked list adalah?	29	2022-07-05 08:54:39.57+00	2022-07-05 08:54:39.57+00
10	Double linked list biasanya menggunakan 2 pointer untuk mengakses ke node-node yang lain, yaitu?	33	2022-07-05 08:55:08.409+00	2022-07-05 08:55:08.409+00
11	'Node new_node, ptr = new Node()\n'+new_node.data = data\n'+ptr = start\n'+if (start) {\n'+while (ptr.next) ptr = ptr.next\n'+ptr.next = new_node\n'+new_node.next = null\n'+} else {\n'+new_node.next = null\n'+start = new_node\n'+}';	37	2022-07-05 09:24:43.601+00	2022-07-05 09:24:43.601+00
12	Code untuk menghapus node depan pada single linked list yang tepat adalah?	41	2022-07-05 09:33:24.621+00	2022-07-05 09:33:24.621+00
13	Berikut adalah kekurangan dari penggunaan linked list adalah?	47	2022-07-05 10:04:52.859+00	2022-07-05 10:04:52.859+00
14	Definisi dari Double linked list yang tepat adalah?	49	2022-07-05 10:12:21.651+00	2022-07-05 10:12:21.651+00
15	Berikut adalah pseudocode yang tepat untuk menampilkan data pada linked list adalah?	54	2022-07-05 10:13:00.371+00	2022-07-05 10:13:00.371+00
\.


--
-- Data for Name: quests; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.quests (id, name, detail, tool, type, "createdAt", "updatedAt") FROM stdin;
1	3 Struct Data	Buat struct baru dengan 3 variable lebih.	data	struct	2022-07-05 11:39:57.126+00	2022-07-05 11:39:57.126+00
4	buat struct dengan variable float	Buat struct baru dengan variable float	float	struct	2022-07-05 11:51:04.48+00	2022-07-05 11:51:04.48+00
5	buat struct dengan variable double	Buat struct baru dengan variable double	double	struct	2022-07-05 11:51:14.342+00	2022-07-05 11:51:14.342+00
6	buat struct dengan variable string	Buat struct baru dengan variable string	string	struct	2022-07-05 12:05:23.551+00	2022-07-05 12:05:23.551+00
7	buat struct dengan variable integer	Buat struct baru dengan variable integer	int	struct	2022-07-05 12:06:25.449+00	2022-07-05 12:06:25.449+00
8	Pada single linked list tambahkan node baru di akhir list 	Pada single linked list tambahkan node baru di akhir list	add	single	2022-07-05 12:10:26.717+00	2022-07-05 12:10:26.717+00
9	Pada double linked list tambahkan node baru di akhir list 	Pada double linked list tambahkan node baru di akhir list	add	double	2022-07-05 12:10:40.327+00	2022-07-05 12:10:40.327+00
10	Pada circular linked list tambahkan node baru di akhir list 	Pada circular linked list tambahkan node baru di akhir list	add	circular	2022-07-05 12:10:48.84+00	2022-07-05 12:10:48.84+00
11	Pada single linked list gunakan tools insert before untuk menyisipkan node baru	Pada single linked list gunakan tools insert before untuk menyisipkan node baru.	before	single	2022-07-05 12:12:44.051+00	2022-07-05 12:12:44.051+00
12	Pada double linked list gunakan tools insert before untuk menyisipkan node baru	Pada double linked list gunakan tools insert before untuk menyisipkan node baru.	before	double	2022-07-05 12:12:50.952+00	2022-07-05 12:12:50.952+00
13	Pada circular linked list gunakan tools insert before untuk menyisipkan node baru	Pada circular linked list gunakan tools insert before untuk menyisipkan node baru.	before	circular	2022-07-05 12:12:57.503+00	2022-07-05 12:12:57.503+00
14	Pada single linked list gunakan tools insert after untuk menyisipkan node baru	Pada single linked list gunakan tools insert after untuk menyisipkan node baru	after	single	2022-07-05 12:14:11.339+00	2022-07-05 12:14:11.339+00
15	Pada double linked list gunakan tools insert after untuk menyisipkan node baru	Pada double linked list gunakan tools insert after untuk menyisipkan node baru	after	double	2022-07-05 12:14:19.581+00	2022-07-05 12:14:19.581+00
16	Pada circular linked list gunakan tools insert after untuk menyisipkan node baru	Pada circular linked list gunakan tools insert after untuk menyisipkan node baru	after	circular	2022-07-05 12:14:26.396+00	2022-07-05 12:14:26.396+00
17	Pada single linked list gunakan tools delete untuk menghapus node pada index	Pada single linked list gunakan tools delete untuk menghapus node pada index	delete	single	2022-07-05 12:15:18.115+00	2022-07-05 12:15:18.115+00
18	Pada double linked list gunakan tools delete untuk menghapus node pada index	Pada double linked list gunakan tools delete untuk menghapus node pada index	delete	double	2022-07-05 12:15:27.751+00	2022-07-05 12:15:27.751+00
19	Pada circular linked list gunakan tools delete untuk menghapus node pada index	Pada circular linked list gunakan tools delete untuk menghapus node pada index	delete	circular	2022-07-05 12:15:34.881+00	2022-07-05 12:15:34.881+00
20	Pada single linked list gunakan tools search untuk mencari node data	Pada single linked list gunakan tools search untuk mencari node data	search	single	2022-07-05 12:17:06.114+00	2022-07-05 12:17:06.114+00
21	Pada double linked list gunakan tools search untuk mencari node data	Pada double linked list gunakan tools search untuk mencari node data	search	double	2022-07-05 12:17:13.955+00	2022-07-05 12:17:13.955+00
22	Pada circular linked list gunakan tools search untuk mencari node data	Pada circular linked list gunakan tools search untuk mencari node data	search	circular	2022-07-05 12:17:22.694+00	2022-07-05 12:17:22.694+00
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, name, "createdAt", "updatedAt") FROM stdin;
1	guest	2022-07-04 15:27:10.268+00	2022-07-04 15:27:10.268+00
2	user	2022-07-04 15:27:10.269+00	2022-07-04 15:27:10.269+00
3	admin	2022-07-04 15:27:10.269+00	2022-07-04 15:27:10.269+00
\.


--
-- Data for Name: searchLogs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."searchLogs" (id, data, "createdAt", "updatedAt", "codeId") FROM stdin;
1	["jos"]	2022-07-04 15:27:48.914+00	2022-07-05 10:15:23.606+00	1
2	[]	2022-07-05 10:23:16.953+00	2022-07-05 10:26:13.778+00	2
3	[]	2022-07-05 11:46:39.907+00	2022-07-05 11:46:39.907+00	3
9	[]	2022-07-06 08:20:58.514+00	2022-07-06 08:23:59.2+00	9
11	[]	2022-07-06 08:39:59.984+00	2022-07-06 08:39:59.984+00	11
10	[]	2022-07-06 08:36:14.681+00	2022-07-06 08:41:55.491+00	10
12	[]	2022-07-06 08:42:25.228+00	2022-07-06 08:42:25.228+00	12
13	[]	2022-07-06 08:43:15.626+00	2022-07-06 08:43:15.626+00	13
15	[]	2022-07-06 11:37:41.529+00	2022-07-06 11:39:07.979+00	15
16	["data"]	2022-07-06 11:39:17.047+00	2022-07-06 11:39:28.659+00	16
17	[]	2022-07-06 11:39:43.794+00	2022-07-06 11:39:43.794+00	17
18	[]	2022-07-07 04:40:51.438+00	2022-07-07 04:40:51.438+00	18
19	[]	2022-07-07 05:52:07.496+00	2022-07-07 05:52:07.496+00	19
20	[]	2022-07-07 07:24:45.895+00	2022-07-07 07:24:45.895+00	20
21	[]	2022-07-07 07:25:14.556+00	2022-07-07 07:25:14.556+00	21
22	[]	2022-07-07 07:31:08.525+00	2022-07-07 07:31:08.525+00	22
23	[]	2022-07-10 03:54:24.748+00	2022-07-10 03:54:24.748+00	23
24	[]	2022-07-10 03:56:33.913+00	2022-07-10 03:56:33.913+00	24
25	[]	2022-07-10 03:57:35.914+00	2022-07-10 03:57:35.914+00	25
26	[]	2022-07-10 04:16:35.319+00	2022-07-10 04:16:55.055+00	26
27	["sdawwa"]	2022-07-10 04:19:12.102+00	2022-07-10 04:19:42.094+00	27
28	[]	2022-07-10 04:20:05.656+00	2022-07-10 04:20:05.656+00	28
37	[]	2022-07-10 14:12:10.753+00	2022-07-10 14:12:10.753+00	37
38	[]	2022-07-11 08:32:09.01+00	2022-07-11 08:32:09.01+00	38
39	[]	2022-07-11 08:32:31.032+00	2022-07-11 08:32:31.032+00	39
40	[]	2022-07-11 08:32:51.923+00	2022-07-11 08:32:51.923+00	40
\.


--
-- Data for Name: structs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.structs (id, name, data, "createdAt", "updatedAt", "listId") FROM stdin;
1	Asolole	[{"type":"Asolole*","value":"next"},{"type":"Asolole*","value":"prev"},{"type":"int","value":"jos"}]	2022-07-04 15:27:47.256+00	2022-07-04 15:27:47.256+00	1
2	Mahasiswa	[{"type":"Mahasiswa*","value":"next"},{"type":"int","value":"id"},{"type":"string","value":"nama"}]	2022-07-05 10:23:14.94+00	2022-07-05 10:23:14.94+00	2
3	Mahasiswa	[{"type":"Mahasi*","value":"next"},{"type":"Mahasi*","value":"prev"},{"type":"int","value":"nrp"}]	2022-07-05 11:46:26.313+00	2022-07-05 11:46:26.313+00	3
9	mahasiswa	[{"type":"mahasiswa*","value":"next"},{"type":"string","value":"kelas"},{"type":"int","value":"nrp"},{"type":"string","value":"nama"}]	2022-07-06 08:20:49.947+00	2022-07-06 08:20:49.947+00	10
10	mahasiswa	[{"type":"mahasiswa*","value":"next"},{"type":"string","value":"kelas"},{"type":"int","value":"nrp"},{"type":"string","value":"nama"}]	2022-07-06 08:20:49.953+00	2022-07-06 08:20:49.953+00	10
11	character	[{"type":"character*","value":"next"},{"type":"string","value":"namahero"},{"type":"int","value":"atk"},{"type":"int","value":"def"},{"type":"string","value":"kelas"}]	2022-07-06 08:36:13.787+00	2022-07-06 08:36:13.787+00	11
12	mahasiswa	[{"type":"mahasiswa*","value":"next"},{"type":"string","value":"Nama"},{"type":"int","value":"Nrp"}]	2022-07-06 08:39:58.624+00	2022-07-06 08:39:58.624+00	12
13	penduduk	[{"type":"penduduk*","value":"next"},{"type":"int","value":"jmlh"},{"type":"string","value":"nama"},{"type":"string","value":"alamat"}]	2022-07-06 08:42:24.209+00	2022-07-06 08:42:24.209+00	13
14	penduduk	[{"type":"penduduk*","value":"next"},{"type":"int","value":"jmlh"},{"type":"string","value":"nama"},{"type":"string","value":"alamat"}]	2022-07-06 08:43:14.176+00	2022-07-06 08:43:14.176+00	14
16	Mahasiswa	[{"type":"Mahasiswa*","value":"next"},{"type":"double","value":"nrp"},{"type":"string","value":"nama"},{"type":"int","value":"kelas"}]	2022-07-06 11:37:39.613+00	2022-07-06 11:37:39.613+00	16
17	Test	[{"type":"Test*","value":"next"},{"type":"Test*","value":"prev"},{"type":"int","value":"data"}]	2022-07-06 11:39:15.546+00	2022-07-06 11:39:15.546+00	17
18	TestData	[{"type":"TestData*","value":"next"},{"type":"int","value":"data"}]	2022-07-06 11:39:42.159+00	2022-07-06 11:39:42.159+00	18
19	Player	[{"type":"Player*","value":"next"},{"type":"string","value":"playerName"},{"type":"float","value":"playerHealth"}]	2022-07-07 04:40:50.738+00	2022-07-07 04:40:50.738+00	19
20	Data	[{"type":"Data*","value":"next"},{"type":"int","value":"test"}]	2022-07-07 05:52:06.168+00	2022-07-07 05:52:06.168+00	23
21	mahasiswa	[{"type":"mahasiswa*","value":"next"},{"type":"mahasiswa*","value":"prev"},{"type":"int","value":"nrp"}]	2022-07-07 07:24:44.464+00	2022-07-07 07:24:44.464+00	25
22	MahasiswaBaru	[{"type":"MahasiswaBaru*","value":"next"},{"type":"int","value":"nrp"},{"type":"string","value":"nama"},{"type":"float","value":"Kelas"}]	2022-07-07 07:25:12.684+00	2022-07-07 07:25:12.684+00	24
23	Mahasiswa	[{"type":"Mahasiswa*","value":"next"},{"type":"string","value":"nama"}]	2022-07-07 07:31:07.097+00	2022-07-07 07:31:07.097+00	26
24	Asolole	[{"type":"Asolole*","value":"next"},{"type":"int","value":"data"},{"type":"string","value":"nama"}]	2022-07-10 03:54:22.994+00	2022-07-10 03:54:22.994+00	27
25	Dataewq	[{"type":"Dataewq*","value":"next"},{"type":"Dataewq*","value":"prev"},{"type":"int","value":"eqweq"},{"type":"float","value":"asdasd"}]	2022-07-10 03:56:32.026+00	2022-07-10 03:56:32.026+00	28
26	Andasd	[{"type":"Andasd*","value":"next"},{"type":"double","value":"qweqw"}]	2022-07-10 03:57:34.191+00	2022-07-10 03:57:34.191+00	29
27	Asolol	[{"type":"Asolol*","value":"next"},{"type":"int","value":"data"}]	2022-07-10 04:16:33.379+00	2022-07-10 04:16:33.379+00	30
28	Wewewe	[{"type":"Wewewe*","value":"next"},{"type":"int","value":"sdawwa"}]	2022-07-10 04:19:10.109+00	2022-07-10 04:19:10.109+00	31
29	Data	[{"type":"Data*","value":"next"},{"type":"Data*","value":"prev"},{"type":"int","value":"ewqeqw"}]	2022-07-10 04:20:03.402+00	2022-07-10 04:20:03.402+00	32
38	das	[{"type":"das*","value":"next"},{"type":"das*","value":"prev"},{"type":"int","value":"Dsaqw"}]	2022-07-10 14:12:09.008+00	2022-07-10 14:12:09.008+00	42
39	Test	[{"type":"Test*","value":"next"},{"type":"Test*","value":"prev"},{"type":"int","value":"data"}]	2022-07-11 08:32:06.75+00	2022-07-11 08:32:06.75+00	44
40	Mahasiswa	[{"type":"Mahasiswa*","value":"next"},{"type":"int","value":"data"}]	2022-07-11 08:32:28.799+00	2022-07-11 08:32:28.799+00	45
41	Warrior	[{"type":"Warrior*","value":"next"},{"type":"int","value":"data"}]	2022-07-11 08:32:49.36+00	2022-07-11 08:32:49.36+00	46
\.


--
-- Data for Name: userQuiz_questions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."userQuiz_questions" ("createdAt", "updatedAt", "quizId", "questionId") FROM stdin;
\.


--
-- Data for Name: user_feedbacks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_feedbacks (id, answer, "createdAt", "updatedAt", "userId", "feedbackId") FROM stdin;
1	pens	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	1
2	d4 teknologi game	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	2
3	8	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	3
4	1	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	4
5	5	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	5
6	5	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	6
7	5	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	7
8	searh data	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	8
9	5	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	9
10	sisip depan	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	10
11	5	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	11
12	5	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	12
13	5	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	13
14	5	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	14
15	5	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	15
16	5	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	16
17	5	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	17
18	fitur code generator	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	18
19	peudocode	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	19
20	test dan materi	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	20
21	5	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	21
22	5	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	22
23	5	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	23
24	terdapat materi dan test, serta code generator yang bisa langsung digunakan	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	24
25	tampilan tidak responsive	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	25
26	tampilan diperbaiki materi diperbanyak dan diperjelas	2022-07-05 14:40:49.046+00	2022-07-05 14:40:49.046+00	6	26
27	Politeknik Elektronika Negeri Surabaya	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	1
28	Teknologi Game	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	2
29	2	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	3
30	5	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	4
31	5	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	5
32	5	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	6
33	5	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	7
34	-	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	8
35	5	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	9
36	-	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	10
37	5	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	11
38	5	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	12
39	5	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	13
40	5	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	14
41	5	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	15
42	5	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	16
43	5	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	17
44	fitur yang menghasilkan source code dan psedudocode	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	18
45	-	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	19
46	-	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	20
47	5	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	21
48	4	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	22
49	4	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	23
50	memberikan visualisasi data yang mudah dipahami	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	24
51	kurang interaktif fitur-fiturnya	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	25
52	mungkin untuk tutorial dan informasinya bisa dibuat garis besar dengan penambahan warna background yang berbeda	2022-07-06 08:33:46.777+00	2022-07-06 08:33:46.777+00	9	26
53	Politeknik Elektronika Negeri Surabaya	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	1
54	Teknologi Game	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	2
55	2	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	3
56	5	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	4
57	5	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	5
58	5	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	6
59	5	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	7
60	-	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	8
61	5	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	9
62	-	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	10
63	5	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	11
64	5	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	12
65	5	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	13
66	5	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	14
67	5	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	15
68	5	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	16
69	5	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	17
70	Fitur penjelasan lengkap tentang data Linked List berupa pseudocode dan source code. 	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	18
71	-	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	19
72	Tab penjelasan pseudocode menghalangi data Linked List.	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	20
73	5	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	21
74	5	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	22
75	5	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	23
76	Penjelasan tentang struktur Linked List di website ini jauh lebih baik dan mudah dipahami dari website lain.	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	24
77	Masih banyak bug yang ada pada website ini.	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	25
78	Memperbaiki bugnya secara detail karena website ini sangat baik bila bugnya tidak ada.	2022-07-06 08:50:58.724+00	2022-07-06 08:50:58.724+00	10	26
79	PENSmhh	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	1
80	Game Tech	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	2
81	2	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	3
82	4	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	4
83	4	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	5
84	5	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	6
85	4	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	7
86	 	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	8
87	3	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	9
88	edit node, zoom button	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	10
89	4	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	11
90	4	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	12
91	5	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	13
92	5	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	14
93	4	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	15
94	4	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	16
95	4	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	17
96	Search dan delete	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	18
97	tidak	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	19
98	tidak	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	20
99	3	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	21
100	3	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	22
101	3	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	23
102	-	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	24
103	-	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	25
104	Button zoom tidak bisa, Edit node belum ada	2022-07-06 08:55:15.602+00	2022-07-06 08:55:15.602+00	11	26
105	pens	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	1
106	d4 teknologi game	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	2
107	2	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	3
108	4	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	4
109	4	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	5
110	4	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	6
111	4	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	7
112	hapus semua	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	8
113	4	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	9
114	tidak ada	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	10
115	4	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	11
116	4	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	12
117	4	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	13
118	4	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	14
119	4	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	15
120	4	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	16
121	4	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	17
122	source code generator	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	18
123	tidak ada	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	19
124	tidak ada	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	20
125	4	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	21
126	4	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	22
127	4	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	23
128	code generator yang bermanfaat	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	24
129	tidak lengkap, tampilan masih belum responsive	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	25
130	tampilan diperbaiki	2022-07-06 09:55:52.932+00	2022-07-06 09:55:52.932+00	8	26
131	Politeknik Elektronika Negeri Surabaya	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	1
132	Teknologi Game	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	2
133	2	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	3
134	5	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	4
135	5	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	5
136	5	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	6
137	5	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	7
138	-	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	8
139	5	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	9
140	-	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	10
141	5	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	11
142	5	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	12
143	5	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	13
144	5	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	14
145	5	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	15
146	5	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	16
147	5	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	17
148	Editor dalam menambah data ke dalam linked list	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	18
149	-	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	19
150	-	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	20
151	4	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	21
152	5	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	22
153	5	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	23
154	Website ini dapat menggenerate data struct ke dalam bahasa C++ dan bisa mengisi data terlebih dahulu	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	24
155	-	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	25
156	hint box pada tutorial belum sesuai pada ukuran layar 1920x 1080 (Hp Pavilion Gaming 15)	2022-07-07 04:52:33.328+00	2022-07-07 04:52:33.328+00	15	26
157	a	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	1
158	a	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	2
159	a	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	3
160	4	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	4
161	4	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	5
162	4	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	6
163	4	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	7
164	a	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	8
165	4	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	9
166	a	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	10
167	4	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	11
168	4	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	12
169	4	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	13
170	4	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	14
171	4	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	15
172	4	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	16
173	4	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	17
174	a	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	18
175	a	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	19
176	a	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	20
177	4	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	21
178	4	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	22
179	4	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	23
180	a	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	24
181	a	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	25
182	a	2022-07-07 05:56:16.054+00	2022-07-07 05:56:16.054+00	5	26
183	pens	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	1
184	D4 Teknologi Game	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	2
185	8	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	3
186	4	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	4
187	3	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	5
188	3	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	6
189	3	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	7
190	search node	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	8
191	4	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	9
192	sisip depan	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	10
193	3	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	11
194	3	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	12
195	4	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	13
196	4	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	14
197	4	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	15
198	4	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	16
199	4	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	17
200	fitur render node sehingga data dapat ditampilkan secara menarik	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	18
201	fitur quest	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	19
202	sulit memahami materi dan flow website	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	20
203	4	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	21
204	4	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	22
205	4	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	23
206	fitur source code generator	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	24
207	terbatas hanya pada materi linked list	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	25
208	perbaikan pada tampilan dan bug	2022-07-10 03:27:00.645+00	2022-07-10 03:27:00.645+00	14	26
209	politeknik elektronika negeri surabaya	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	1
210	D4 teknologi game	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	2
211	2	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	3
212	1	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	4
213	4	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	5
214	4	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	6
215	5	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	7
216	-	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	8
217	3	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	9
218	tool untuk sisip depan dan delete pada index	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	10
219	3	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	11
220	4	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	12
221	5	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	13
222	5	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	14
223	4	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	15
224	4	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	16
225	4	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	17
226	terdapat visualisasi dan materi yang sesuai dengan modul	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	18
227	-	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	19
228	fitur tes yang masih belum sempurna	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	20
229	4	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	21
230	4	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	22
231	4	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	23
232	fitur untuk memunculkan source code langsung	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	24
233	tutorial yang belum menjelaskan	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	25
234	tampilan, tutorial dan materi yang perlu diperbaiki kembali	2022-07-10 03:45:30.691+00	2022-07-10 03:45:30.691+00	19	26
235	pens	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	1
357	-	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	19
236	teknologi game	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	2
237	2	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	3
238	1	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	4
239	4	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	5
240	3	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	6
241	4	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	7
242	insert node (tampilan form modal ambigu)	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	8
243	4	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	9
244	-	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	10
245	4	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	11
246	4	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	12
247	3	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	13
248	4	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	14
249	4	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	15
250	4	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	16
251	4	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	17
252	code generator	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	18
253	quest	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	19
254	memahami materi linked list	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	20
255	4	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	21
256	4	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	22
257	4	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	23
258	lebih menarik dan interaktif	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	24
259	kurang lengkap	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	25
260	perbaiki tampilan dan ui	2022-07-10 04:16:15.296+00	2022-07-10 04:16:15.296+00	20	26
261	pens	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	1
262	teknologi game	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	2
263	2	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	3
264	4	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	4
265	3	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	5
266	4	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	6
267	3	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	7
268	urutan tool yang kurang cocok	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	8
269	4	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	9
270	hapus berdasarkan data	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	10
271	3	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	11
272	4	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	12
273	3	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	13
274	4	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	14
275	3	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	15
276	4	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	16
277	3	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	17
278	menampilkan node seperti urutan objek	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	18
279	fitur editor yang memiliki penjelasan kurang lengkap	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	19
280	-	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	20
281	3	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	21
282	3	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	22
283	3	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	23
284	fitur untuk membuat data struct secara custom	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	24
285	materi kurang lengkap	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	25
286	tampilan ui yang masih ambigu	2022-07-10 04:32:44.989+00	2022-07-10 04:32:44.989+00	21	26
287	pens	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	1
288	D4 Teknologi Game	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	2
289	2	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	3
290	4	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	4
291	4	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	5
292	3	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	6
293	3	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	7
294	tools insert node	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	8
295	3	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	9
296	-	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	10
297	4	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	11
298	3	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	12
299	5	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	13
300	4	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	14
301	5	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	15
302	5	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	16
303	4	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	17
304	fitur menampilkan node dan data yang diinput	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	18
305	fitur pseudocode	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	19
306	menggunakan tools dan node yang muncul	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	20
307	4	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	21
308	3	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	22
309	3	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	23
310	fitur code generator	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	24
311	penjelasan masih sulit dipahami	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	25
312	materi dan visualisasi yang cukup sulit untuk dipahami	2022-07-10 04:48:02.511+00	2022-07-10 04:48:02.511+00	22	26
313	pens	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	1
314	teknologi game	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	2
315	2	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	3
316	4	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	4
317	3	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	5
318	4	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	6
319	3	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	7
320	-	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	8
321	4	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	9
322	-	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	10
323	4	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	11
324	4	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	12
325	3	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	13
326	4	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	14
327	4	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	15
328	3	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	16
329	4	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	17
330	fitur code generator	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	18
331	-	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	19
332	-	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	20
333	4	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	21
334	3	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	22
335	4	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	23
336	fitur code generator	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	24
337	-	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	25
338	memperbaiki bug dan tampilan	2022-07-10 05:25:29.139+00	2022-07-10 05:25:29.139+00	23	26
339	pens	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	1
340	teknologi game	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	2
341	2	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	3
342	4	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	4
343	4	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	5
344	4	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	6
345	4	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	7
346	-	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	8
347	4	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	9
348	-	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	10
349	4	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	11
350	4	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	12
351	4	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	13
352	4	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	14
353	4	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	15
354	4	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	16
355	4	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	17
356	fitur memunculkan code secara langsung	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	18
358	-	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	20
359	4	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	21
360	4	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	22
361	4	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	23
362	fitur membuat custom sruct	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	24
363	penjelasan kurang lengkap	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	25
364	perbaikan pada tampilan dan materi	2022-07-10 05:31:13.105+00	2022-07-10 05:31:13.105+00	24	26
365	pens	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	1
366	teknologi game	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	2
367	2	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	3
368	4	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	4
369	4	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	5
370	4	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	6
371	4	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	7
372	-	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	8
373	4	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	9
374	-	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	10
375	4	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	11
376	4	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	12
377	3	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	13
378	4	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	14
379	4	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	15
380	4	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	16
381	4	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	17
382	tools yang beragam	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	18
383	-	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	19
384	-	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	20
385	4	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	21
386	4	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	22
387	4	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	23
388	tampilan yang cukup menarik	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	24
389	beberapa tampilan masih belum responsive	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	25
390	perbaikan pada ui dan tampilan	2022-07-10 05:55:16.216+00	2022-07-10 05:55:16.216+00	25	26
391	politeknik elektronika negeri surabaya	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	1
392	teknologi game	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	2
393	2	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	3
394	4	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	4
395	4	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	5
396	4	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	6
397	4	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	7
398	-	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	8
399	4	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	9
400	-	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	10
401	4	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	11
402	4	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	12
403	4	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	13
404	4	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	14
405	4	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	15
406	4	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	16
407	4	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	17
408	fitur pada editor yaitu code generator	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	18
409	-	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	19
410	-	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	20
411	4	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	21
412	4	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	22
413	4	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	23
414	tampilan yang cukup menarik	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	24
415	materi yang kurang lengkap	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	25
416	tutorial dan penjelasan diperbaiki kembali	2022-07-10 06:02:11.889+00	2022-07-10 06:02:11.889+00	26	26
\.


--
-- Data for Name: user_quests; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_quests (id, "isComplete", "createdAt", "updatedAt", "userId", "questId") FROM stdin;
31	t	2022-07-05 12:10:26.72+00	2022-07-07 05:52:17.434+00	5	8
24	t	2022-07-05 12:05:23.562+00	2022-07-07 07:25:13.008+00	5	6
21	t	2022-07-05 12:03:05.466+00	2022-07-07 07:25:13.079+00	5	1
25	t	2022-07-05 12:06:25.453+00	2022-07-07 07:25:13.084+00	5	7
22	t	2022-07-05 12:03:05.469+00	2022-07-07 07:25:13.086+00	5	4
86	t	2022-07-06 06:20:08.536+00	2022-07-07 07:31:14.027+00	8	8
42	t	2022-07-05 12:12:57.509+00	2022-07-10 10:17:32.757+00	6	13
58	t	2022-07-05 12:17:13.96+00	2022-07-10 12:30:07.17+00	6	21
1	f	2022-07-05 11:39:57.133+00	2022-07-05 11:39:57.133+00	\N	1
9	f	2022-07-05 11:50:34.725+00	2022-07-05 11:50:34.725+00	\N	\N
13	f	2022-07-05 11:51:04.484+00	2022-07-05 11:51:04.484+00	\N	4
17	f	2022-07-05 11:51:14.345+00	2022-07-05 11:51:14.345+00	\N	5
5	f	2022-07-05 11:48:11.972+00	2022-07-05 11:48:11.972+00	\N	\N
2	f	2022-07-05 11:39:57.135+00	2022-07-05 11:39:57.135+00	\N	1
10	f	2022-07-05 11:50:34.729+00	2022-07-05 11:50:34.729+00	\N	\N
14	f	2022-07-05 11:51:04.486+00	2022-07-05 11:51:04.486+00	\N	4
18	f	2022-07-05 11:51:14.348+00	2022-07-05 11:51:14.348+00	\N	5
6	f	2022-07-05 11:48:11.974+00	2022-07-05 11:48:11.974+00	\N	\N
3	f	2022-07-05 11:39:57.137+00	2022-07-05 11:39:57.137+00	\N	1
11	f	2022-07-05 11:50:34.735+00	2022-07-05 11:50:34.735+00	\N	\N
15	f	2022-07-05 11:51:04.488+00	2022-07-05 11:51:04.488+00	\N	4
19	f	2022-07-05 11:51:14.35+00	2022-07-05 11:51:14.35+00	\N	5
7	f	2022-07-05 11:48:11.976+00	2022-07-05 11:48:11.976+00	\N	\N
4	f	2022-07-05 11:39:57.139+00	2022-07-05 11:39:57.139+00	\N	1
12	f	2022-07-05 11:50:34.737+00	2022-07-05 11:50:34.737+00	\N	\N
16	f	2022-07-05 11:51:04.49+00	2022-07-05 11:51:04.49+00	\N	4
20	f	2022-07-05 11:51:14.352+00	2022-07-05 11:51:14.352+00	\N	5
8	f	2022-07-05 11:48:11.978+00	2022-07-05 11:48:11.978+00	\N	\N
23	f	2022-07-05 12:03:05.472+00	2022-07-05 12:03:05.472+00	5	5
35	f	2022-07-05 12:10:48.844+00	2022-07-05 12:10:48.844+00	5	10
37	f	2022-07-05 12:12:44.054+00	2022-07-05 12:12:44.054+00	5	11
39	f	2022-07-05 12:12:50.955+00	2022-07-05 12:12:50.955+00	5	12
41	f	2022-07-05 12:12:57.507+00	2022-07-05 12:12:57.507+00	5	13
43	f	2022-07-05 12:14:11.343+00	2022-07-05 12:14:11.343+00	5	14
45	f	2022-07-05 12:14:19.585+00	2022-07-05 12:14:19.585+00	5	15
47	f	2022-07-05 12:14:26.399+00	2022-07-05 12:14:26.399+00	5	16
49	f	2022-07-05 12:15:18.128+00	2022-07-05 12:15:18.128+00	5	17
51	f	2022-07-05 12:15:27.755+00	2022-07-05 12:15:27.755+00	5	18
53	f	2022-07-05 12:15:34.884+00	2022-07-05 12:15:34.884+00	5	19
55	f	2022-07-05 12:17:06.117+00	2022-07-05 12:17:06.117+00	5	20
57	f	2022-07-05 12:17:13.958+00	2022-07-05 12:17:13.958+00	5	21
59	f	2022-07-05 12:17:22.697+00	2022-07-05 12:17:22.697+00	5	22
32	t	2022-07-05 12:10:26.724+00	2022-07-05 12:22:09.918+00	6	8
36	t	2022-07-05 12:10:48.848+00	2022-07-05 14:34:03.629+00	6	10
30	t	2022-07-05 12:08:25.803+00	2022-07-05 14:34:39.61+00	6	7
28	t	2022-07-05 12:08:25.798+00	2022-07-05 14:34:39.626+00	6	5
26	t	2022-07-05 12:08:25.792+00	2022-07-05 14:34:39.718+00	6	1
34	t	2022-07-05 12:10:40.333+00	2022-07-05 14:35:06.527+00	6	9
29	t	2022-07-05 12:08:25.801+00	2022-07-05 14:36:51.671+00	6	6
27	t	2022-07-05 12:08:25.795+00	2022-07-05 14:36:51.682+00	6	4
48	t	2022-07-05 12:14:26.401+00	2022-07-05 14:58:08.926+00	6	16
60	t	2022-07-05 12:17:22.7+00	2022-07-05 14:58:14.063+00	6	22
61	f	2022-07-05 15:26:34.302+00	2022-07-05 15:26:34.302+00	7	1
62	f	2022-07-05 15:26:34.307+00	2022-07-05 15:26:34.307+00	7	4
63	f	2022-07-05 15:26:34.309+00	2022-07-05 15:26:34.309+00	7	5
64	f	2022-07-05 15:26:34.312+00	2022-07-05 15:26:34.312+00	7	6
65	f	2022-07-05 15:26:34.315+00	2022-07-05 15:26:34.315+00	7	7
66	f	2022-07-05 15:26:34.317+00	2022-07-05 15:26:34.317+00	7	8
67	f	2022-07-05 15:26:34.32+00	2022-07-05 15:26:34.32+00	7	9
68	f	2022-07-05 15:26:34.322+00	2022-07-05 15:26:34.322+00	7	10
69	f	2022-07-05 15:26:34.325+00	2022-07-05 15:26:34.325+00	7	11
70	f	2022-07-05 15:26:34.327+00	2022-07-05 15:26:34.327+00	7	12
71	f	2022-07-05 15:26:34.329+00	2022-07-05 15:26:34.329+00	7	13
72	f	2022-07-05 15:26:34.332+00	2022-07-05 15:26:34.332+00	7	14
73	f	2022-07-05 15:26:34.334+00	2022-07-05 15:26:34.334+00	7	15
74	f	2022-07-05 15:26:34.336+00	2022-07-05 15:26:34.336+00	7	16
75	f	2022-07-05 15:26:34.338+00	2022-07-05 15:26:34.338+00	7	17
76	f	2022-07-05 15:26:34.34+00	2022-07-05 15:26:34.34+00	7	18
77	f	2022-07-05 15:26:34.342+00	2022-07-05 15:26:34.342+00	7	19
78	f	2022-07-05 15:26:34.344+00	2022-07-05 15:26:34.344+00	7	20
79	f	2022-07-05 15:26:34.346+00	2022-07-05 15:26:34.346+00	7	21
80	f	2022-07-05 15:26:34.348+00	2022-07-05 15:26:34.348+00	7	22
81	f	2022-07-06 06:20:08.525+00	2022-07-06 06:20:08.525+00	8	1
82	f	2022-07-06 06:20:08.528+00	2022-07-06 06:20:08.528+00	8	4
83	f	2022-07-06 06:20:08.53+00	2022-07-06 06:20:08.53+00	8	5
84	f	2022-07-06 06:20:08.532+00	2022-07-06 06:20:08.532+00	8	6
85	f	2022-07-06 06:20:08.534+00	2022-07-06 06:20:08.534+00	8	7
87	f	2022-07-06 06:20:08.539+00	2022-07-06 06:20:08.539+00	8	9
88	f	2022-07-06 06:20:08.541+00	2022-07-06 06:20:08.541+00	8	10
89	f	2022-07-06 06:20:08.542+00	2022-07-06 06:20:08.542+00	8	11
90	f	2022-07-06 06:20:08.544+00	2022-07-06 06:20:08.544+00	8	12
91	f	2022-07-06 06:20:08.546+00	2022-07-06 06:20:08.546+00	8	13
92	f	2022-07-06 06:20:08.548+00	2022-07-06 06:20:08.548+00	8	14
93	f	2022-07-06 06:20:08.55+00	2022-07-06 06:20:08.55+00	8	15
94	f	2022-07-06 06:20:08.552+00	2022-07-06 06:20:08.552+00	8	16
95	f	2022-07-06 06:20:08.554+00	2022-07-06 06:20:08.554+00	8	17
96	f	2022-07-06 06:20:08.556+00	2022-07-06 06:20:08.556+00	8	18
97	f	2022-07-06 06:20:08.56+00	2022-07-06 06:20:08.56+00	8	19
98	f	2022-07-06 06:20:08.562+00	2022-07-06 06:20:08.562+00	8	20
99	f	2022-07-06 06:20:08.564+00	2022-07-06 06:20:08.564+00	8	21
54	t	2022-07-05 12:15:34.887+00	2022-07-10 12:31:26.241+00	6	19
38	t	2022-07-05 12:12:44.057+00	2022-07-10 12:31:46.117+00	6	11
44	t	2022-07-05 12:14:11.345+00	2022-07-10 12:31:55.159+00	6	14
56	t	2022-07-05 12:17:06.121+00	2022-07-10 12:31:56.845+00	6	20
50	t	2022-07-05 12:15:18.137+00	2022-07-10 12:32:01.104+00	6	17
40	t	2022-07-05 12:12:50.958+00	2022-07-10 12:32:32.19+00	6	12
46	t	2022-07-05 12:14:19.587+00	2022-07-10 12:32:38.275+00	6	15
52	t	2022-07-05 12:15:27.771+00	2022-07-10 12:33:23.606+00	6	18
33	t	2022-07-05 12:10:40.331+00	2022-07-11 08:23:53.357+00	5	9
100	f	2022-07-06 06:20:08.566+00	2022-07-06 06:20:08.566+00	8	22
101	f	2022-07-06 08:18:13.989+00	2022-07-06 08:18:13.989+00	9	1
102	f	2022-07-06 08:18:13.992+00	2022-07-06 08:18:13.992+00	9	4
103	f	2022-07-06 08:18:13.995+00	2022-07-06 08:18:13.995+00	9	5
104	f	2022-07-06 08:18:13.996+00	2022-07-06 08:18:13.996+00	9	6
105	f	2022-07-06 08:18:13.999+00	2022-07-06 08:18:13.999+00	9	7
107	f	2022-07-06 08:18:14.003+00	2022-07-06 08:18:14.003+00	9	9
108	f	2022-07-06 08:18:14.005+00	2022-07-06 08:18:14.005+00	9	10
109	f	2022-07-06 08:18:14.007+00	2022-07-06 08:18:14.007+00	9	11
110	f	2022-07-06 08:18:14.009+00	2022-07-06 08:18:14.009+00	9	12
111	f	2022-07-06 08:18:14.01+00	2022-07-06 08:18:14.01+00	9	13
112	f	2022-07-06 08:18:14.012+00	2022-07-06 08:18:14.012+00	9	14
113	f	2022-07-06 08:18:14.014+00	2022-07-06 08:18:14.014+00	9	15
114	f	2022-07-06 08:18:14.016+00	2022-07-06 08:18:14.016+00	9	16
115	f	2022-07-06 08:18:14.018+00	2022-07-06 08:18:14.018+00	9	17
116	f	2022-07-06 08:18:14.02+00	2022-07-06 08:18:14.02+00	9	18
117	f	2022-07-06 08:18:14.022+00	2022-07-06 08:18:14.022+00	9	19
119	f	2022-07-06 08:18:14.026+00	2022-07-06 08:18:14.026+00	9	21
120	f	2022-07-06 08:18:14.027+00	2022-07-06 08:18:14.027+00	9	22
106	t	2022-07-06 08:18:14.001+00	2022-07-06 08:22:28.758+00	9	8
118	t	2022-07-06 08:18:14.024+00	2022-07-06 08:23:47.488+00	9	20
121	f	2022-07-06 08:32:37.399+00	2022-07-06 08:32:37.399+00	10	1
122	f	2022-07-06 08:32:37.402+00	2022-07-06 08:32:37.402+00	10	4
123	f	2022-07-06 08:32:37.403+00	2022-07-06 08:32:37.403+00	10	5
124	f	2022-07-06 08:32:37.405+00	2022-07-06 08:32:37.405+00	10	6
125	f	2022-07-06 08:32:37.407+00	2022-07-06 08:32:37.407+00	10	7
127	f	2022-07-06 08:32:37.411+00	2022-07-06 08:32:37.411+00	10	9
128	f	2022-07-06 08:32:37.413+00	2022-07-06 08:32:37.413+00	10	10
130	f	2022-07-06 08:32:37.417+00	2022-07-06 08:32:37.417+00	10	12
131	f	2022-07-06 08:32:37.424+00	2022-07-06 08:32:37.424+00	10	13
133	f	2022-07-06 08:32:37.429+00	2022-07-06 08:32:37.429+00	10	15
134	f	2022-07-06 08:32:37.431+00	2022-07-06 08:32:37.431+00	10	16
135	f	2022-07-06 08:32:37.433+00	2022-07-06 08:32:37.433+00	10	17
136	f	2022-07-06 08:32:37.436+00	2022-07-06 08:32:37.436+00	10	18
137	f	2022-07-06 08:32:37.438+00	2022-07-06 08:32:37.438+00	10	19
139	f	2022-07-06 08:32:37.442+00	2022-07-06 08:32:37.442+00	10	21
140	f	2022-07-06 08:32:37.444+00	2022-07-06 08:32:37.444+00	10	22
126	t	2022-07-06 08:32:37.409+00	2022-07-06 08:36:45.261+00	10	8
129	t	2022-07-06 08:32:37.415+00	2022-07-06 08:37:54.996+00	10	11
141	f	2022-07-06 08:38:23.906+00	2022-07-06 08:38:23.906+00	11	1
142	f	2022-07-06 08:38:23.908+00	2022-07-06 08:38:23.908+00	11	4
143	f	2022-07-06 08:38:23.91+00	2022-07-06 08:38:23.91+00	11	5
144	f	2022-07-06 08:38:23.912+00	2022-07-06 08:38:23.912+00	11	6
145	f	2022-07-06 08:38:23.914+00	2022-07-06 08:38:23.914+00	11	7
147	f	2022-07-06 08:38:23.918+00	2022-07-06 08:38:23.918+00	11	9
148	f	2022-07-06 08:38:23.92+00	2022-07-06 08:38:23.92+00	11	10
149	f	2022-07-06 08:38:23.922+00	2022-07-06 08:38:23.922+00	11	11
150	f	2022-07-06 08:38:23.924+00	2022-07-06 08:38:23.924+00	11	12
151	f	2022-07-06 08:38:23.926+00	2022-07-06 08:38:23.926+00	11	13
152	f	2022-07-06 08:38:23.928+00	2022-07-06 08:38:23.928+00	11	14
153	f	2022-07-06 08:38:23.93+00	2022-07-06 08:38:23.93+00	11	15
154	f	2022-07-06 08:38:23.932+00	2022-07-06 08:38:23.932+00	11	16
155	f	2022-07-06 08:38:23.934+00	2022-07-06 08:38:23.934+00	11	17
156	f	2022-07-06 08:38:23.936+00	2022-07-06 08:38:23.936+00	11	18
157	f	2022-07-06 08:38:23.938+00	2022-07-06 08:38:23.938+00	11	19
158	f	2022-07-06 08:38:23.94+00	2022-07-06 08:38:23.94+00	11	20
159	f	2022-07-06 08:38:23.942+00	2022-07-06 08:38:23.942+00	11	21
160	f	2022-07-06 08:38:23.944+00	2022-07-06 08:38:23.944+00	11	22
132	t	2022-07-06 08:32:37.427+00	2022-07-06 08:38:59.447+00	10	14
138	t	2022-07-06 08:32:37.441+00	2022-07-06 08:39:23.376+00	10	20
146	t	2022-07-06 08:38:23.916+00	2022-07-06 08:40:38.004+00	11	8
162	f	2022-07-06 08:40:58.079+00	2022-07-06 08:40:58.079+00	12	4
163	f	2022-07-06 08:40:58.081+00	2022-07-06 08:40:58.081+00	12	5
167	f	2022-07-06 08:40:58.089+00	2022-07-06 08:40:58.089+00	12	9
168	f	2022-07-06 08:40:58.09+00	2022-07-06 08:40:58.09+00	12	10
170	f	2022-07-06 08:40:58.094+00	2022-07-06 08:40:58.094+00	12	12
171	f	2022-07-06 08:40:58.096+00	2022-07-06 08:40:58.096+00	12	13
172	f	2022-07-06 08:40:58.098+00	2022-07-06 08:40:58.098+00	12	14
173	f	2022-07-06 08:40:58.1+00	2022-07-06 08:40:58.1+00	12	15
174	f	2022-07-06 08:40:58.104+00	2022-07-06 08:40:58.104+00	12	16
176	f	2022-07-06 08:40:58.112+00	2022-07-06 08:40:58.112+00	12	18
177	f	2022-07-06 08:40:58.114+00	2022-07-06 08:40:58.114+00	12	19
178	f	2022-07-06 08:40:58.116+00	2022-07-06 08:40:58.116+00	12	20
179	f	2022-07-06 08:40:58.118+00	2022-07-06 08:40:58.118+00	12	21
180	f	2022-07-06 08:40:58.12+00	2022-07-06 08:40:58.12+00	12	22
164	t	2022-07-06 08:40:58.083+00	2022-07-06 08:43:14.335+00	12	6
165	t	2022-07-06 08:40:58.085+00	2022-07-06 08:43:14.353+00	12	7
161	t	2022-07-06 08:40:58.075+00	2022-07-06 08:43:14.492+00	12	1
166	t	2022-07-06 08:40:58.087+00	2022-07-06 08:44:51.038+00	12	8
169	t	2022-07-06 08:40:58.092+00	2022-07-06 08:46:58.914+00	12	11
175	t	2022-07-06 08:40:58.11+00	2022-07-06 08:47:03.518+00	12	17
181	f	2022-07-06 09:01:14.702+00	2022-07-06 09:01:14.702+00	13	1
182	f	2022-07-06 09:01:14.705+00	2022-07-06 09:01:14.705+00	13	4
183	f	2022-07-06 09:01:14.707+00	2022-07-06 09:01:14.707+00	13	5
184	f	2022-07-06 09:01:14.709+00	2022-07-06 09:01:14.709+00	13	6
185	f	2022-07-06 09:01:14.711+00	2022-07-06 09:01:14.711+00	13	7
186	f	2022-07-06 09:01:14.716+00	2022-07-06 09:01:14.716+00	13	8
187	f	2022-07-06 09:01:14.718+00	2022-07-06 09:01:14.718+00	13	9
188	f	2022-07-06 09:01:14.722+00	2022-07-06 09:01:14.722+00	13	10
189	f	2022-07-06 09:01:14.724+00	2022-07-06 09:01:14.724+00	13	11
190	f	2022-07-06 09:01:14.725+00	2022-07-06 09:01:14.725+00	13	12
191	f	2022-07-06 09:01:14.727+00	2022-07-06 09:01:14.727+00	13	13
192	f	2022-07-06 09:01:14.729+00	2022-07-06 09:01:14.729+00	13	14
193	f	2022-07-06 09:01:14.731+00	2022-07-06 09:01:14.731+00	13	15
194	f	2022-07-06 09:01:14.733+00	2022-07-06 09:01:14.733+00	13	16
195	f	2022-07-06 09:01:14.735+00	2022-07-06 09:01:14.735+00	13	17
196	f	2022-07-06 09:01:14.737+00	2022-07-06 09:01:14.737+00	13	18
197	f	2022-07-06 09:01:14.738+00	2022-07-06 09:01:14.738+00	13	19
198	f	2022-07-06 09:01:14.74+00	2022-07-06 09:01:14.74+00	13	20
199	f	2022-07-06 09:01:14.742+00	2022-07-06 09:01:14.742+00	13	21
200	f	2022-07-06 09:01:14.746+00	2022-07-06 09:01:14.746+00	13	22
201	f	2022-07-06 11:32:39.351+00	2022-07-06 11:32:39.351+00	14	1
202	f	2022-07-06 11:32:39.355+00	2022-07-06 11:32:39.355+00	14	4
203	f	2022-07-06 11:32:39.36+00	2022-07-06 11:32:39.36+00	14	5
204	f	2022-07-06 11:32:39.362+00	2022-07-06 11:32:39.362+00	14	6
210	f	2022-07-06 11:32:39.378+00	2022-07-06 11:32:39.378+00	14	12
211	f	2022-07-06 11:32:39.38+00	2022-07-06 11:32:39.38+00	14	13
213	f	2022-07-06 11:32:39.385+00	2022-07-06 11:32:39.385+00	14	15
214	f	2022-07-06 11:32:39.387+00	2022-07-06 11:32:39.387+00	14	16
216	f	2022-07-06 11:32:39.392+00	2022-07-06 11:32:39.392+00	14	18
217	f	2022-07-06 11:32:39.394+00	2022-07-06 11:32:39.394+00	14	19
220	f	2022-07-06 11:32:39.401+00	2022-07-06 11:32:39.401+00	14	22
206	t	2022-07-06 11:32:39.367+00	2022-07-06 11:37:53.519+00	14	8
209	t	2022-07-06 11:32:39.375+00	2022-07-06 11:38:20.873+00	14	11
212	t	2022-07-06 11:32:39.382+00	2022-07-06 11:38:28.766+00	14	14
218	t	2022-07-06 11:32:39.396+00	2022-07-06 11:38:48.448+00	14	20
215	t	2022-07-06 11:32:39.39+00	2022-07-06 11:38:59.276+00	14	17
205	t	2022-07-06 11:32:39.365+00	2022-07-06 11:39:15.742+00	14	7
207	t	2022-07-06 11:32:39.37+00	2022-07-06 11:39:21.38+00	14	9
219	t	2022-07-06 11:32:39.399+00	2022-07-06 11:39:28.649+00	14	21
208	t	2022-07-06 11:32:39.372+00	2022-07-06 11:39:47.871+00	14	10
221	f	2022-07-07 04:39:07.703+00	2022-07-07 04:39:07.703+00	15	1
222	f	2022-07-07 04:39:07.705+00	2022-07-07 04:39:07.705+00	15	4
223	f	2022-07-07 04:39:07.707+00	2022-07-07 04:39:07.707+00	15	5
224	f	2022-07-07 04:39:07.709+00	2022-07-07 04:39:07.709+00	15	6
225	f	2022-07-07 04:39:07.711+00	2022-07-07 04:39:07.711+00	15	7
227	f	2022-07-07 04:39:07.716+00	2022-07-07 04:39:07.716+00	15	9
228	f	2022-07-07 04:39:07.718+00	2022-07-07 04:39:07.718+00	15	10
229	f	2022-07-07 04:39:07.719+00	2022-07-07 04:39:07.719+00	15	11
230	f	2022-07-07 04:39:07.721+00	2022-07-07 04:39:07.721+00	15	12
231	f	2022-07-07 04:39:07.723+00	2022-07-07 04:39:07.723+00	15	13
232	f	2022-07-07 04:39:07.725+00	2022-07-07 04:39:07.725+00	15	14
233	f	2022-07-07 04:39:07.727+00	2022-07-07 04:39:07.727+00	15	15
234	f	2022-07-07 04:39:07.729+00	2022-07-07 04:39:07.729+00	15	16
235	f	2022-07-07 04:39:07.731+00	2022-07-07 04:39:07.731+00	15	17
236	f	2022-07-07 04:39:07.733+00	2022-07-07 04:39:07.733+00	15	18
237	f	2022-07-07 04:39:07.735+00	2022-07-07 04:39:07.735+00	15	19
238	f	2022-07-07 04:39:07.737+00	2022-07-07 04:39:07.737+00	15	20
239	f	2022-07-07 04:39:07.738+00	2022-07-07 04:39:07.738+00	15	21
240	f	2022-07-07 04:39:07.74+00	2022-07-07 04:39:07.74+00	15	22
226	t	2022-07-07 04:39:07.713+00	2022-07-07 04:41:24.809+00	15	8
241	f	2022-07-07 05:48:44.95+00	2022-07-07 05:48:44.95+00	16	1
242	f	2022-07-07 05:48:44.953+00	2022-07-07 05:48:44.953+00	16	4
243	f	2022-07-07 05:48:44.954+00	2022-07-07 05:48:44.954+00	16	5
244	f	2022-07-07 05:48:44.956+00	2022-07-07 05:48:44.956+00	16	6
245	f	2022-07-07 05:48:44.958+00	2022-07-07 05:48:44.958+00	16	7
246	f	2022-07-07 05:48:44.96+00	2022-07-07 05:48:44.96+00	16	8
247	f	2022-07-07 05:48:44.963+00	2022-07-07 05:48:44.963+00	16	9
248	f	2022-07-07 05:48:44.965+00	2022-07-07 05:48:44.965+00	16	10
249	f	2022-07-07 05:48:44.966+00	2022-07-07 05:48:44.966+00	16	11
250	f	2022-07-07 05:48:44.968+00	2022-07-07 05:48:44.968+00	16	12
251	f	2022-07-07 05:48:44.97+00	2022-07-07 05:48:44.97+00	16	13
252	f	2022-07-07 05:48:44.972+00	2022-07-07 05:48:44.972+00	16	14
253	f	2022-07-07 05:48:44.974+00	2022-07-07 05:48:44.974+00	16	15
254	f	2022-07-07 05:48:44.976+00	2022-07-07 05:48:44.976+00	16	16
255	f	2022-07-07 05:48:44.978+00	2022-07-07 05:48:44.978+00	16	17
256	f	2022-07-07 05:48:44.984+00	2022-07-07 05:48:44.984+00	16	18
257	f	2022-07-07 05:48:44.985+00	2022-07-07 05:48:44.985+00	16	19
258	f	2022-07-07 05:48:44.987+00	2022-07-07 05:48:44.987+00	16	20
259	f	2022-07-07 05:48:44.989+00	2022-07-07 05:48:44.989+00	16	21
260	f	2022-07-07 05:48:44.991+00	2022-07-07 05:48:44.991+00	16	22
261	f	2022-07-09 15:28:53.305+00	2022-07-09 15:28:53.305+00	17	1
262	f	2022-07-09 15:28:53.308+00	2022-07-09 15:28:53.308+00	17	4
263	f	2022-07-09 15:28:53.31+00	2022-07-09 15:28:53.31+00	17	5
264	f	2022-07-09 15:28:53.312+00	2022-07-09 15:28:53.312+00	17	6
265	f	2022-07-09 15:28:53.314+00	2022-07-09 15:28:53.314+00	17	7
266	f	2022-07-09 15:28:53.316+00	2022-07-09 15:28:53.316+00	17	8
267	f	2022-07-09 15:28:53.318+00	2022-07-09 15:28:53.318+00	17	9
268	f	2022-07-09 15:28:53.32+00	2022-07-09 15:28:53.32+00	17	10
269	f	2022-07-09 15:28:53.322+00	2022-07-09 15:28:53.322+00	17	11
270	f	2022-07-09 15:28:53.324+00	2022-07-09 15:28:53.324+00	17	12
271	f	2022-07-09 15:28:53.326+00	2022-07-09 15:28:53.326+00	17	13
272	f	2022-07-09 15:28:53.327+00	2022-07-09 15:28:53.327+00	17	14
273	f	2022-07-09 15:28:53.329+00	2022-07-09 15:28:53.329+00	17	15
274	f	2022-07-09 15:28:53.331+00	2022-07-09 15:28:53.331+00	17	16
275	f	2022-07-09 15:28:53.333+00	2022-07-09 15:28:53.333+00	17	17
276	f	2022-07-09 15:28:53.335+00	2022-07-09 15:28:53.335+00	17	18
277	f	2022-07-09 15:28:53.337+00	2022-07-09 15:28:53.337+00	17	19
278	f	2022-07-09 15:28:53.339+00	2022-07-09 15:28:53.339+00	17	20
279	f	2022-07-09 15:28:53.341+00	2022-07-09 15:28:53.341+00	17	21
280	f	2022-07-09 15:28:53.343+00	2022-07-09 15:28:53.343+00	17	22
281	f	2022-07-09 15:29:04.758+00	2022-07-09 15:29:04.758+00	18	1
282	f	2022-07-09 15:29:04.76+00	2022-07-09 15:29:04.76+00	18	4
283	f	2022-07-09 15:29:04.762+00	2022-07-09 15:29:04.762+00	18	5
284	f	2022-07-09 15:29:04.764+00	2022-07-09 15:29:04.764+00	18	6
285	f	2022-07-09 15:29:04.765+00	2022-07-09 15:29:04.765+00	18	7
286	f	2022-07-09 15:29:04.767+00	2022-07-09 15:29:04.767+00	18	8
287	f	2022-07-09 15:29:04.769+00	2022-07-09 15:29:04.769+00	18	9
288	f	2022-07-09 15:29:04.771+00	2022-07-09 15:29:04.771+00	18	10
289	f	2022-07-09 15:29:04.773+00	2022-07-09 15:29:04.773+00	18	11
290	f	2022-07-09 15:29:04.775+00	2022-07-09 15:29:04.775+00	18	12
291	f	2022-07-09 15:29:04.777+00	2022-07-09 15:29:04.777+00	18	13
292	f	2022-07-09 15:29:04.779+00	2022-07-09 15:29:04.779+00	18	14
293	f	2022-07-09 15:29:04.781+00	2022-07-09 15:29:04.781+00	18	15
294	f	2022-07-09 15:29:04.784+00	2022-07-09 15:29:04.784+00	18	16
295	f	2022-07-09 15:29:04.786+00	2022-07-09 15:29:04.786+00	18	17
296	f	2022-07-09 15:29:04.787+00	2022-07-09 15:29:04.787+00	18	18
297	f	2022-07-09 15:29:04.789+00	2022-07-09 15:29:04.789+00	18	19
298	f	2022-07-09 15:29:04.791+00	2022-07-09 15:29:04.791+00	18	20
299	f	2022-07-09 15:29:04.793+00	2022-07-09 15:29:04.793+00	18	21
300	f	2022-07-09 15:29:04.795+00	2022-07-09 15:29:04.795+00	18	22
304	f	2022-07-10 03:27:33.737+00	2022-07-10 03:27:33.737+00	19	6
310	f	2022-07-10 03:27:33.752+00	2022-07-10 03:27:33.752+00	19	12
314	f	2022-07-10 03:27:33.761+00	2022-07-10 03:27:33.761+00	19	16
316	f	2022-07-10 03:27:33.765+00	2022-07-10 03:27:33.765+00	19	18
317	f	2022-07-10 03:27:33.767+00	2022-07-10 03:27:33.767+00	19	19
318	f	2022-07-10 03:27:33.769+00	2022-07-10 03:27:33.769+00	19	20
319	f	2022-07-10 03:27:33.776+00	2022-07-10 03:27:33.776+00	19	21
320	f	2022-07-10 03:27:33.778+00	2022-07-10 03:27:33.778+00	19	22
306	t	2022-07-10 03:27:33.741+00	2022-07-10 03:55:26.492+00	19	8
309	t	2022-07-10 03:27:33.75+00	2022-07-10 03:55:51.253+00	19	11
312	t	2022-07-10 03:27:33.757+00	2022-07-10 03:56:05.499+00	19	14
315	t	2022-07-10 03:27:33.763+00	2022-07-10 03:56:11.589+00	19	17
305	t	2022-07-10 03:27:33.739+00	2022-07-10 03:56:32.394+00	19	7
301	t	2022-07-10 03:27:33.729+00	2022-07-10 03:56:32.397+00	19	1
302	t	2022-07-10 03:27:33.732+00	2022-07-10 03:56:32.407+00	19	4
307	t	2022-07-10 03:27:33.745+00	2022-07-10 03:56:45.552+00	19	9
313	t	2022-07-10 03:27:33.759+00	2022-07-10 03:57:05.929+00	19	15
303	t	2022-07-10 03:27:33.734+00	2022-07-10 03:57:34.555+00	19	5
308	t	2022-07-10 03:27:33.747+00	2022-07-10 03:57:40.756+00	19	10
311	t	2022-07-10 03:27:33.754+00	2022-07-10 03:57:48.801+00	19	13
321	f	2022-07-10 04:04:30.424+00	2022-07-10 04:04:30.424+00	20	1
322	f	2022-07-10 04:04:30.432+00	2022-07-10 04:04:30.432+00	20	4
323	f	2022-07-10 04:04:30.434+00	2022-07-10 04:04:30.434+00	20	5
324	f	2022-07-10 04:04:30.437+00	2022-07-10 04:04:30.437+00	20	6
330	f	2022-07-10 04:04:30.452+00	2022-07-10 04:04:30.452+00	20	12
332	f	2022-07-10 04:04:30.466+00	2022-07-10 04:04:30.466+00	20	14
333	f	2022-07-10 04:04:30.468+00	2022-07-10 04:04:30.468+00	20	15
335	f	2022-07-10 04:04:30.472+00	2022-07-10 04:04:30.472+00	20	17
336	f	2022-07-10 04:04:30.474+00	2022-07-10 04:04:30.474+00	20	18
337	f	2022-07-10 04:04:30.476+00	2022-07-10 04:04:30.476+00	20	19
339	f	2022-07-10 04:04:30.49+00	2022-07-10 04:04:30.49+00	20	21
328	t	2022-07-10 04:04:30.448+00	2022-07-10 04:16:39.197+00	20	10
331	t	2022-07-10 04:04:30.46+00	2022-07-10 04:16:43.221+00	20	13
340	t	2022-07-10 04:04:30.496+00	2022-07-10 04:16:46.174+00	20	22
334	t	2022-07-10 04:04:30.47+00	2022-07-10 04:17:33.28+00	20	16
325	t	2022-07-10 04:04:30.439+00	2022-07-10 04:19:10.597+00	20	7
326	t	2022-07-10 04:04:30.444+00	2022-07-10 04:19:27.143+00	20	8
329	t	2022-07-10 04:04:30.45+00	2022-07-10 04:19:41.092+00	20	11
338	t	2022-07-10 04:04:30.48+00	2022-07-10 04:19:42.089+00	20	20
327	t	2022-07-10 04:04:30.446+00	2022-07-10 04:20:38.357+00	20	9
341	f	2022-07-10 04:24:49.594+00	2022-07-10 04:24:49.594+00	21	1
342	f	2022-07-10 04:24:49.596+00	2022-07-10 04:24:49.596+00	21	4
343	f	2022-07-10 04:24:49.598+00	2022-07-10 04:24:49.598+00	21	5
344	f	2022-07-10 04:24:49.603+00	2022-07-10 04:24:49.603+00	21	6
345	f	2022-07-10 04:24:49.607+00	2022-07-10 04:24:49.607+00	21	7
346	f	2022-07-10 04:24:49.609+00	2022-07-10 04:24:49.609+00	21	8
347	f	2022-07-10 04:24:49.61+00	2022-07-10 04:24:49.61+00	21	9
348	f	2022-07-10 04:24:49.612+00	2022-07-10 04:24:49.612+00	21	10
349	f	2022-07-10 04:24:49.614+00	2022-07-10 04:24:49.614+00	21	11
350	f	2022-07-10 04:24:49.616+00	2022-07-10 04:24:49.616+00	21	12
351	f	2022-07-10 04:24:49.618+00	2022-07-10 04:24:49.618+00	21	13
352	f	2022-07-10 04:24:49.619+00	2022-07-10 04:24:49.619+00	21	14
353	f	2022-07-10 04:24:49.621+00	2022-07-10 04:24:49.621+00	21	15
354	f	2022-07-10 04:24:49.623+00	2022-07-10 04:24:49.623+00	21	16
355	f	2022-07-10 04:24:49.625+00	2022-07-10 04:24:49.625+00	21	17
356	f	2022-07-10 04:24:49.627+00	2022-07-10 04:24:49.627+00	21	18
357	f	2022-07-10 04:24:49.629+00	2022-07-10 04:24:49.629+00	21	19
358	f	2022-07-10 04:24:49.63+00	2022-07-10 04:24:49.63+00	21	20
359	f	2022-07-10 04:24:49.632+00	2022-07-10 04:24:49.632+00	21	21
360	f	2022-07-10 04:24:49.634+00	2022-07-10 04:24:49.634+00	21	22
361	f	2022-07-10 04:41:20.396+00	2022-07-10 04:41:20.396+00	22	1
362	f	2022-07-10 04:41:20.399+00	2022-07-10 04:41:20.399+00	22	4
363	f	2022-07-10 04:41:20.401+00	2022-07-10 04:41:20.401+00	22	5
364	f	2022-07-10 04:41:20.403+00	2022-07-10 04:41:20.403+00	22	6
365	f	2022-07-10 04:41:20.411+00	2022-07-10 04:41:20.411+00	22	7
366	f	2022-07-10 04:41:20.413+00	2022-07-10 04:41:20.413+00	22	8
367	f	2022-07-10 04:41:20.415+00	2022-07-10 04:41:20.415+00	22	9
368	f	2022-07-10 04:41:20.418+00	2022-07-10 04:41:20.418+00	22	10
369	f	2022-07-10 04:41:20.42+00	2022-07-10 04:41:20.42+00	22	11
370	f	2022-07-10 04:41:20.421+00	2022-07-10 04:41:20.421+00	22	12
371	f	2022-07-10 04:41:20.423+00	2022-07-10 04:41:20.423+00	22	13
372	f	2022-07-10 04:41:20.425+00	2022-07-10 04:41:20.425+00	22	14
373	f	2022-07-10 04:41:20.426+00	2022-07-10 04:41:20.426+00	22	15
374	f	2022-07-10 04:41:20.428+00	2022-07-10 04:41:20.428+00	22	16
375	f	2022-07-10 04:41:20.43+00	2022-07-10 04:41:20.43+00	22	17
376	f	2022-07-10 04:41:20.432+00	2022-07-10 04:41:20.432+00	22	18
377	f	2022-07-10 04:41:20.434+00	2022-07-10 04:41:20.434+00	22	19
378	f	2022-07-10 04:41:20.435+00	2022-07-10 04:41:20.435+00	22	20
379	f	2022-07-10 04:41:20.437+00	2022-07-10 04:41:20.437+00	22	21
380	f	2022-07-10 04:41:20.439+00	2022-07-10 04:41:20.439+00	22	22
381	f	2022-07-10 04:49:13.585+00	2022-07-10 04:49:13.585+00	23	1
382	f	2022-07-10 04:49:13.587+00	2022-07-10 04:49:13.587+00	23	4
383	f	2022-07-10 04:49:13.594+00	2022-07-10 04:49:13.594+00	23	5
384	f	2022-07-10 04:49:13.596+00	2022-07-10 04:49:13.596+00	23	6
385	f	2022-07-10 04:49:13.598+00	2022-07-10 04:49:13.598+00	23	7
386	f	2022-07-10 04:49:13.6+00	2022-07-10 04:49:13.6+00	23	8
387	f	2022-07-10 04:49:13.601+00	2022-07-10 04:49:13.601+00	23	9
388	f	2022-07-10 04:49:13.603+00	2022-07-10 04:49:13.603+00	23	10
389	f	2022-07-10 04:49:13.606+00	2022-07-10 04:49:13.606+00	23	11
390	f	2022-07-10 04:49:13.607+00	2022-07-10 04:49:13.607+00	23	12
391	f	2022-07-10 04:49:13.609+00	2022-07-10 04:49:13.609+00	23	13
392	f	2022-07-10 04:49:13.611+00	2022-07-10 04:49:13.611+00	23	14
393	f	2022-07-10 04:49:13.612+00	2022-07-10 04:49:13.612+00	23	15
394	f	2022-07-10 04:49:13.614+00	2022-07-10 04:49:13.614+00	23	16
395	f	2022-07-10 04:49:13.616+00	2022-07-10 04:49:13.616+00	23	17
396	f	2022-07-10 04:49:13.617+00	2022-07-10 04:49:13.617+00	23	18
397	f	2022-07-10 04:49:13.619+00	2022-07-10 04:49:13.619+00	23	19
398	f	2022-07-10 04:49:13.621+00	2022-07-10 04:49:13.621+00	23	20
399	f	2022-07-10 04:49:13.622+00	2022-07-10 04:49:13.622+00	23	21
400	f	2022-07-10 04:49:13.624+00	2022-07-10 04:49:13.624+00	23	22
401	f	2022-07-10 05:26:22.362+00	2022-07-10 05:26:22.362+00	24	1
402	f	2022-07-10 05:26:22.365+00	2022-07-10 05:26:22.365+00	24	4
403	f	2022-07-10 05:26:22.366+00	2022-07-10 05:26:22.366+00	24	5
404	f	2022-07-10 05:26:22.368+00	2022-07-10 05:26:22.368+00	24	6
405	f	2022-07-10 05:26:22.37+00	2022-07-10 05:26:22.37+00	24	7
406	f	2022-07-10 05:26:22.372+00	2022-07-10 05:26:22.372+00	24	8
407	f	2022-07-10 05:26:22.374+00	2022-07-10 05:26:22.374+00	24	9
408	f	2022-07-10 05:26:22.377+00	2022-07-10 05:26:22.377+00	24	10
409	f	2022-07-10 05:26:22.379+00	2022-07-10 05:26:22.379+00	24	11
410	f	2022-07-10 05:26:22.381+00	2022-07-10 05:26:22.381+00	24	12
411	f	2022-07-10 05:26:22.384+00	2022-07-10 05:26:22.384+00	24	13
412	f	2022-07-10 05:26:22.386+00	2022-07-10 05:26:22.386+00	24	14
413	f	2022-07-10 05:26:22.387+00	2022-07-10 05:26:22.387+00	24	15
414	f	2022-07-10 05:26:22.389+00	2022-07-10 05:26:22.389+00	24	16
415	f	2022-07-10 05:26:22.391+00	2022-07-10 05:26:22.391+00	24	17
416	f	2022-07-10 05:26:22.393+00	2022-07-10 05:26:22.393+00	24	18
417	f	2022-07-10 05:26:22.395+00	2022-07-10 05:26:22.395+00	24	19
418	f	2022-07-10 05:26:22.398+00	2022-07-10 05:26:22.398+00	24	20
419	f	2022-07-10 05:26:22.4+00	2022-07-10 05:26:22.4+00	24	21
420	f	2022-07-10 05:26:22.401+00	2022-07-10 05:26:22.401+00	24	22
421	f	2022-07-10 05:33:18.034+00	2022-07-10 05:33:18.034+00	25	1
422	f	2022-07-10 05:33:18.036+00	2022-07-10 05:33:18.036+00	25	4
423	f	2022-07-10 05:33:18.038+00	2022-07-10 05:33:18.038+00	25	5
424	f	2022-07-10 05:33:18.04+00	2022-07-10 05:33:18.04+00	25	6
425	f	2022-07-10 05:33:18.042+00	2022-07-10 05:33:18.042+00	25	7
426	f	2022-07-10 05:33:18.043+00	2022-07-10 05:33:18.043+00	25	8
427	f	2022-07-10 05:33:18.045+00	2022-07-10 05:33:18.045+00	25	9
428	f	2022-07-10 05:33:18.047+00	2022-07-10 05:33:18.047+00	25	10
429	f	2022-07-10 05:33:18.049+00	2022-07-10 05:33:18.049+00	25	11
430	f	2022-07-10 05:33:18.051+00	2022-07-10 05:33:18.051+00	25	12
431	f	2022-07-10 05:33:18.053+00	2022-07-10 05:33:18.053+00	25	13
432	f	2022-07-10 05:33:18.054+00	2022-07-10 05:33:18.054+00	25	14
433	f	2022-07-10 05:33:18.056+00	2022-07-10 05:33:18.056+00	25	15
434	f	2022-07-10 05:33:18.058+00	2022-07-10 05:33:18.058+00	25	16
435	f	2022-07-10 05:33:18.059+00	2022-07-10 05:33:18.059+00	25	17
436	f	2022-07-10 05:33:18.061+00	2022-07-10 05:33:18.061+00	25	18
437	f	2022-07-10 05:33:18.063+00	2022-07-10 05:33:18.063+00	25	19
438	f	2022-07-10 05:33:18.064+00	2022-07-10 05:33:18.064+00	25	20
439	f	2022-07-10 05:33:18.066+00	2022-07-10 05:33:18.066+00	25	21
440	f	2022-07-10 05:33:18.068+00	2022-07-10 05:33:18.068+00	25	22
441	f	2022-07-10 05:56:01.706+00	2022-07-10 05:56:01.706+00	26	1
442	f	2022-07-10 05:56:01.708+00	2022-07-10 05:56:01.708+00	26	4
443	f	2022-07-10 05:56:01.71+00	2022-07-10 05:56:01.71+00	26	5
444	f	2022-07-10 05:56:01.712+00	2022-07-10 05:56:01.712+00	26	6
445	f	2022-07-10 05:56:01.714+00	2022-07-10 05:56:01.714+00	26	7
446	f	2022-07-10 05:56:01.716+00	2022-07-10 05:56:01.716+00	26	8
448	f	2022-07-10 05:56:01.721+00	2022-07-10 05:56:01.721+00	26	10
449	f	2022-07-10 05:56:01.723+00	2022-07-10 05:56:01.723+00	26	11
451	f	2022-07-10 05:56:01.727+00	2022-07-10 05:56:01.727+00	26	13
452	f	2022-07-10 05:56:01.729+00	2022-07-10 05:56:01.729+00	26	14
453	f	2022-07-10 05:56:01.731+00	2022-07-10 05:56:01.731+00	26	15
454	f	2022-07-10 05:56:01.732+00	2022-07-10 05:56:01.732+00	26	16
455	f	2022-07-10 05:56:01.734+00	2022-07-10 05:56:01.734+00	26	17
456	f	2022-07-10 05:56:01.736+00	2022-07-10 05:56:01.736+00	26	18
457	f	2022-07-10 05:56:01.738+00	2022-07-10 05:56:01.738+00	26	19
458	f	2022-07-10 05:56:01.739+00	2022-07-10 05:56:01.739+00	26	20
459	f	2022-07-10 05:56:01.741+00	2022-07-10 05:56:01.741+00	26	21
460	f	2022-07-10 05:56:01.75+00	2022-07-10 05:56:01.75+00	26	22
447	t	2022-07-10 05:56:01.718+00	2022-07-10 14:12:15.365+00	26	9
450	t	2022-07-10 05:56:01.725+00	2022-07-10 14:12:20.127+00	26	12
\.


--
-- Data for Name: user_quizzes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_quizzes (id, result, "createdAt", "updatedAt", "userId") FROM stdin;
1	67	2022-07-05 10:17:33.846+00	2022-07-05 10:17:33.846+00	\N
2	87	2022-07-06 08:28:13.473+00	2022-07-06 08:28:13.473+00	9
3	27	2022-07-06 08:48:07.037+00	2022-07-06 08:48:07.037+00	11
4	27	2022-07-06 08:48:07.04+00	2022-07-06 08:48:07.04+00	11
5	60	2022-07-06 11:42:07.604+00	2022-07-06 11:42:07.604+00	14
6	7	2022-07-07 05:53:08.855+00	2022-07-07 05:53:08.855+00	5
7	60	2022-07-10 03:53:56.825+00	2022-07-10 03:53:56.825+00	19
8	7	2022-07-11 12:19:36.142+00	2022-07-11 12:19:36.142+00	6
9	7	2022-07-11 23:44:17.24+00	2022-07-11 23:44:17.24+00	17
\.


--
-- Data for Name: user_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_roles ("createdAt", "updatedAt", "userId", "roleId") FROM stdin;
2022-07-05 12:03:05.46+00	2022-07-05 12:03:05.46+00	5	2
2022-07-05 12:08:25.787+00	2022-07-05 12:08:25.787+00	6	2
2022-07-05 15:26:34.296+00	2022-07-05 15:26:34.296+00	7	2
2022-07-06 06:20:08.522+00	2022-07-06 06:20:08.522+00	8	2
2022-07-06 08:18:13.986+00	2022-07-06 08:18:13.986+00	9	2
2022-07-06 08:32:37.396+00	2022-07-06 08:32:37.396+00	10	2
2022-07-06 08:38:23.902+00	2022-07-06 08:38:23.902+00	11	2
2022-07-06 08:40:58.072+00	2022-07-06 08:40:58.072+00	12	2
2022-07-06 09:01:14.698+00	2022-07-06 09:01:14.698+00	13	2
2022-07-06 11:32:39.348+00	2022-07-06 11:32:39.348+00	14	2
2022-07-07 04:39:07.699+00	2022-07-07 04:39:07.699+00	15	2
2022-07-07 05:48:44.947+00	2022-07-07 05:48:44.947+00	16	2
2022-07-09 15:28:53.301+00	2022-07-09 15:28:53.301+00	17	2
2022-07-09 15:29:04.754+00	2022-07-09 15:29:04.754+00	18	2
2022-07-10 03:27:33.725+00	2022-07-10 03:27:33.725+00	19	2
2022-07-10 04:04:30.419+00	2022-07-10 04:04:30.419+00	20	2
2022-07-10 04:24:49.591+00	2022-07-10 04:24:49.591+00	21	2
2022-07-10 04:41:20.393+00	2022-07-10 04:41:20.393+00	22	2
2022-07-10 04:49:13.582+00	2022-07-10 04:49:13.582+00	23	2
2022-07-10 05:26:22.359+00	2022-07-10 05:26:22.359+00	24	2
2022-07-10 05:33:18.031+00	2022-07-10 05:33:18.031+00	25	2
2022-07-10 05:56:01.702+00	2022-07-10 05:56:01.702+00	26	2
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, email, password, "createdAt", "updatedAt") FROM stdin;
5	Sosro Jo	xxr77ilham@gmail.com	$2a$10$7vHy9BLr6.VbiEqypb2EkucBYO2CZDd9eyTPZJFY6KK5AazI1Ge4q	2022-07-05 12:03:05.448+00	2022-07-05 12:03:05.448+00
6	hamka	hamka@gmail.com	$2a$10$Stsqb0Ld2EJiVwdYjt0heObXP03X918gcbaSGiR1hLfUwQ5xuWHum	2022-07-05 12:08:25.78+00	2022-07-05 12:08:25.78+00
7	Farhan Muhammad	farhaanmuha@gmail.com	$2a$10$2n2/RvQt3vw.xf9T1wx9JeD5GRlrSwXgNxjSSJrtHi.F.nZ2MpY1i	2022-07-05 15:26:34.283+00	2022-07-05 15:26:34.283+00
8	Unkown Number	xxr55ilham@gmail.com	$2a$10$jZlwCh3aHwzeMBqxoeadbe1Ikcnlv.MHdgi3789xeKI/Oyjld2LVa	2022-07-06 06:20:08.517+00	2022-07-06 06:20:08.517+00
9	58_Rayhan Lintang Bagas Yuanezra	bagasrayhan600@gmail.com	$2a$10$i7fqgomJc0nqK8A4rf98.OUtn7yw74PXRFHSpCTb7VoctrpA6JtYu	2022-07-06 08:18:13.982+00	2022-07-06 08:18:13.982+00
10	80-Romadona Bariq	romadonabariq@gmail.com	$2a$10$aJ/B6PFhy4eLUVDDAVUIvehXSnynOcmvHk8fmC2pdpxO3b5Oy74qu	2022-07-06 08:32:37.391+00	2022-07-06 08:32:37.391+00
11	36_Adi Nugroho	adi66675@gmail.com	$2a$10$XLHlSILuGMSmeNOko71EHuE5N/r/JAuiOnXr8iVm5IBXA/3P2irl.	2022-07-06 08:38:23.897+00	2022-07-06 08:38:23.897+00
12	Jastin	tiowema.jastin2@gmail.com	$2a$10$AuNNNkHvYuoW6VOXNegjiuk6pji7HJF9SNKe3akB//wQrdyLnkTcK	2022-07-06 08:40:58.066+00	2022-07-06 08:40:58.066+00
13	Hilmi	hilmi@gmail.com	$2a$10$Lr5noIyOtagtb3JbjKnrOeHZZBnK9MBsvkv/TmKjhUbJh8hyzqXA2	2022-07-06 09:01:14.693+00	2022-07-06 09:01:14.693+00
14	ilhamp	ilhamp@gmail.com	$2a$10$ckQ2se4MlwarFrvDenv2rOq7LRcrGCUyNPHJnmc9CwuUPEnKh3O0u	2022-07-06 11:32:39.338+00	2022-07-06 11:32:39.338+00
15	Atqa Munzir	atqamz@gmail.com	$2a$10$zzSwDIDoehfDysJ1.JhveuSkPZCF.U94LLTZX38RFL36pTuVGYNam	2022-07-07 04:39:07.694+00	2022-07-07 04:39:07.694+00
16	71-lucky mahendra	luckymahendra080503@gmail.com	$2a$10$XPKUi5OxQcxy1UpcOyzmwOIXzULAVl/ykJ.QXEVY2pQEQow17Fhf6	2022-07-07 05:48:44.943+00	2022-07-07 05:48:44.943+00
17	ilham	ilham@gmail.com	$2a$10$XEbi8InVgo9sJj0Qz9YPFuZ..7M8aEflYREO1iTIF7OQWrfOKcCqC	2022-07-09 15:28:53.292+00	2022-07-09 15:28:53.292+00
18	Ilham Pratama	pratamailham206@gmail.com	$2a$10$1cRmaRKYdT.XN75.cZY6oe1N4bobI9ovqEwpM1zDkm9Snrmma2cE.	2022-07-09 15:29:04.75+00	2022-07-09 15:29:04.75+00
19	DaffaHan	Daffa11Han@gmail.com	$2a$10$gqVreBl5c3MZGj.iQatGG.dG0gQ1KwQ0NnFGggnOWAToONh87f9ie	2022-07-10 03:27:33.715+00	2022-07-10 03:27:33.715+00
20	AdiNugroho	AndiNugroho@gmail.com	$2a$10$Tz8Q0hx4Fhxc/06QCn8.c.uCYH9Cw1pZ4juLhzUMp1qywOOvjJLa.	2022-07-10 04:04:30.409+00	2022-07-10 04:04:30.409+00
21	Dimasptr	dimasptr@gmail.com	$2a$10$rwkevPbOaXQTPUoSWKIHCeqOTK1r5AuvsFGS6p/OrncMxRaxG3bYC	2022-07-10 04:24:49.585+00	2022-07-10 04:24:49.585+00
22	RahmanM	rahmanms@gmail.com	$2a$10$aVaFdTMFtzlSFmPiTIod0eDHgv4AIW43k5HXekllQsFWhtq70etXW	2022-07-10 04:41:20.388+00	2022-07-10 04:41:20.388+00
23	kevin	kevin@gmail.com	$2a$10$bU8Qhve7NxV.9vcpOILz5.8h6qZ2BGJ/jTEspr4A7kbfiE7HihCnC	2022-07-10 04:49:13.577+00	2022-07-10 04:49:13.577+00
24	azhari	azhari@gmail.com	$2a$10$cYhU5ntspFWfBqR4wGgpneD/IQiY2XUCXhBv6SKYyAYjlLTTO0EO6	2022-07-10 05:26:22.354+00	2022-07-10 05:26:22.354+00
25	aldi	alidananda@gmail.com	$2a$10$Obl4O/CohrvKyZgM1Wz/KuZK5tOm6Bas7eVhqLgR1pFFSvPnJMSX.	2022-07-10 05:33:18.026+00	2022-07-10 05:33:18.026+00
26	alfito	alfito@gmail.com	$2a$10$BwZXJnl6rRcMqaQbL0i1.uHbu7b.vcHyYQZxizde8m0JHMI.IWzCC	2022-07-10 05:56:01.697+00	2022-07-10 05:56:01.697+00
\.


--
-- Name: answers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.answers_id_seq', 56, true);


--
-- Name: codes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.codes_id_seq', 40, true);


--
-- Name: feedbacks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.feedbacks_id_seq', 26, true);


--
-- Name: lists_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lists_id_seq', 46, true);


--
-- Name: logs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.logs_id_seq', 40, true);


--
-- Name: nodes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nodes_id_seq', 40, true);


--
-- Name: operations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.operations_id_seq', 40, true);


--
-- Name: questions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.questions_id_seq', 15, true);


--
-- Name: quests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.quests_id_seq', 22, true);


--
-- Name: searchLogs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."searchLogs_id_seq"', 40, true);


--
-- Name: structs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.structs_id_seq', 41, true);


--
-- Name: user_feedbacks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_feedbacks_id_seq', 416, true);


--
-- Name: user_quests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_quests_id_seq', 460, true);


--
-- Name: user_quizzes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_quizzes_id_seq', 9, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 26, true);


--
-- Name: answers answers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.answers
    ADD CONSTRAINT answers_pkey PRIMARY KEY (id);


--
-- Name: codes codes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.codes
    ADD CONSTRAINT codes_pkey PRIMARY KEY (id);


--
-- Name: feedbacks feedbacks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.feedbacks
    ADD CONSTRAINT feedbacks_pkey PRIMARY KEY (id);


--
-- Name: lists lists_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lists
    ADD CONSTRAINT lists_pkey PRIMARY KEY (id);


--
-- Name: logs logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.logs
    ADD CONSTRAINT logs_pkey PRIMARY KEY (id);


--
-- Name: nodes nodes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nodes
    ADD CONSTRAINT nodes_pkey PRIMARY KEY (id);


--
-- Name: operations operations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.operations
    ADD CONSTRAINT operations_pkey PRIMARY KEY (id);


--
-- Name: question_answers question_answers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.question_answers
    ADD CONSTRAINT question_answers_pkey PRIMARY KEY ("questionId", "answerId");


--
-- Name: questions questions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_pkey PRIMARY KEY (id);


--
-- Name: quests quests_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quests
    ADD CONSTRAINT quests_pkey PRIMARY KEY (id);


--
-- Name: roles roles_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_name_key UNIQUE (name);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: searchLogs searchLogs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."searchLogs"
    ADD CONSTRAINT "searchLogs_pkey" PRIMARY KEY (id);


--
-- Name: structs structs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.structs
    ADD CONSTRAINT structs_pkey PRIMARY KEY (id);


--
-- Name: userQuiz_questions userQuiz_questions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."userQuiz_questions"
    ADD CONSTRAINT "userQuiz_questions_pkey" PRIMARY KEY ("quizId", "questionId");


--
-- Name: user_feedbacks user_feedbacks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_feedbacks
    ADD CONSTRAINT user_feedbacks_pkey PRIMARY KEY (id);


--
-- Name: user_quests user_quests_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_quests
    ADD CONSTRAINT user_quests_pkey PRIMARY KEY (id);


--
-- Name: user_quizzes user_quizzes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_quizzes
    ADD CONSTRAINT user_quizzes_pkey PRIMARY KEY (id);


--
-- Name: user_roles user_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY ("userId", "roleId");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: codes codes_listId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.codes
    ADD CONSTRAINT "codes_listId_fkey" FOREIGN KEY ("listId") REFERENCES public.lists(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: lists lists_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lists
    ADD CONSTRAINT "lists_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: logs logs_codeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.logs
    ADD CONSTRAINT "logs_codeId_fkey" FOREIGN KEY ("codeId") REFERENCES public.codes(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: nodes nodes_listId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nodes
    ADD CONSTRAINT "nodes_listId_fkey" FOREIGN KEY ("listId") REFERENCES public.lists(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: operations operations_codeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.operations
    ADD CONSTRAINT "operations_codeId_fkey" FOREIGN KEY ("codeId") REFERENCES public.codes(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: question_answers question_answers_answerId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.question_answers
    ADD CONSTRAINT "question_answers_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES public.answers(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: question_answers question_answers_questionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.question_answers
    ADD CONSTRAINT "question_answers_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES public.questions(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: searchLogs searchLogs_codeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."searchLogs"
    ADD CONSTRAINT "searchLogs_codeId_fkey" FOREIGN KEY ("codeId") REFERENCES public.codes(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: structs structs_listId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.structs
    ADD CONSTRAINT "structs_listId_fkey" FOREIGN KEY ("listId") REFERENCES public.lists(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: userQuiz_questions userQuiz_questions_questionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."userQuiz_questions"
    ADD CONSTRAINT "userQuiz_questions_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES public.questions(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: userQuiz_questions userQuiz_questions_quizId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."userQuiz_questions"
    ADD CONSTRAINT "userQuiz_questions_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES public.user_quizzes(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_feedbacks user_feedbacks_feedbackId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_feedbacks
    ADD CONSTRAINT "user_feedbacks_feedbackId_fkey" FOREIGN KEY ("feedbackId") REFERENCES public.feedbacks(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_feedbacks user_feedbacks_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_feedbacks
    ADD CONSTRAINT "user_feedbacks_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: user_quests user_quests_questId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_quests
    ADD CONSTRAINT "user_quests_questId_fkey" FOREIGN KEY ("questId") REFERENCES public.quests(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: user_quests user_quests_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_quests
    ADD CONSTRAINT "user_quests_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: user_quizzes user_quizzes_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_quizzes
    ADD CONSTRAINT "user_quizzes_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: user_roles user_roles_roleId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT "user_roles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES public.roles(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_roles user_roles_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT "user_roles_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

