练习: 实验页面
动物园数据库中的所有表格
animals
此表会列出动物园中的各个动物。每个动物仅占一行。可能存在多个动物同名，甚至多个同物种动物同名的情况。
name — 动物的名称（例如“George”）
species — （例如：“gorilla”（大猩猩））
birthdate — 动物的出生日期（例如 '1998-05-18’）
diet
此表对照列出各物种及其所吃的食物。动物园中的每个物种至少吃一种食物，许多物种吃多种食物。 如果某物种食用一种以上的食物，则该物种将占多行。
species — 物种名称（例如：“hyena”（鬣狗））
food — 物种所吃食物的名称（例如：“meat”（肉类））
taxonomy
此表列出动物园中各物种的（部分）生物分类学名称。可用于辨别物种之间进化论角度的亲缘关系。
name — 物种的俗称（例如，“jackal”（豺））
species — 分类学物种名称（例如，“aureus”（亚洲胡狼））
genus — 分类学属名（例如，“Canis”（犬属））
family — 分类学科名（例如，“Canidae”（犬科））
t_order — 分类学目名（例如，“Carnivora”（食肉目））
如果你对此分类一无所知，也无需担心，本课程不需要详细掌握这些信息。但如果你对此感兴趣，可查阅维基百科相关文章分类学及 生物分类。

ordernames
此表列出 taxonomy 表中各分类学目的俗称。
t_order — 分类学目名（例如，“Cetacea”（鲸目））
name — 俗称（例如，“whales and dolphins”（鲸和海豚））
所用 SQL
上面的表由以下 SQL 命令创建。create table 命令将在第 4 节课中详细介绍，可在此简单了解：

create table animals (
       name text,
       species text,
       birthdate date);

create table diet (
       species text,
       food text);

create table taxonomy (
       name text,
       species text,
       genus text,
       family text,
       t_order text);

create table ordernames (
       t_order text,
       name text);
注意：在 SQL 中，字符串和日期值必须用单引号括起来。

这是 Python 代码文件，注意缩进。 逐个运行查询，如果出现错误，这样可以轻松调试代码。


# QUERY = "select max(name) from animals;"

# QUERY = "select * from animals limit 10;"

# QUERY = "select * from animals where species = 'orangutan' order by birthdate;"

# QUERY = "select name from animals where species = 'orangutan' order by birthdate desc;"

# QUERY = "select name, birthdate from animals order by name limit 10 offset 20;"

# QUERY = "select species, min(birthdate) from animals group by species;"

QUERY = '''
select name, count(*) as num from animals
group by name
order by num desc
limit 5;
'''

QUERY='''
select name from animals, diet 
where animals.species = diet.species 
and diet.food='fish'
'''
QUERY='''
select name from animals 
join diet on animals.species=diet.species 
where food='fish'
'''
