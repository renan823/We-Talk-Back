/*selecionar todas as linguas faladas pelo usuario 2*/
select u.name, l.language from user u join speak s on u.id = s.UserId join language l on l.id = s.LanguageId where u.id = 2;

/*selecionar todas as linguas que o usuario 1 quer aprender*/
select u.name, l.language from user u join learn ln on u.id = ln.UserId join language l on l.id = ln.LanguageId where u.id = 1;

/*selcionar todas as mensagens de uma conversa*/
select m.text, u.name from message m join chat c on m.ChatId = c.id join user u on u.id = m.UserId where c.id = 1 order by m.date asc;