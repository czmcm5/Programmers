-- "예를 들어 어떤 개발자의 SKILL_CODE가 400 (=b'110010000')이라면, 이는 SKILLCODES 테이블에서 CODE가 256 (=b'100000000'), 128 (=b'10000000'), 16 (=b'10000') 에 해당하는 스킬을 가졌다는 것을 의미합니다."

-- 의미:
-- SKILL_CODE = 400 = 256 + 128 + 16 = b'110010000'
-- AND: 둘다 1 => 1
-- 400 & 256 = 256 !== 0  <- Python 있음
-- 400 & 128 = 128 !== 0  <- C# 있음

-- FROM D JOIN S ON S.NAME IN ('Python','C#') 의미:
-- D가 안쓰이므로 cross join이 되어 걍 모든 D의 데이터에 'Python'과 'C#'가 붙음
-- WHERE로 진짜인지 아닌지 필터링해야댐
-- 그리고 'Python'이랑 'C#' 둘 다 가진 D가 있을 수도 있으니 중복 제거 해야함

SELECT DISTINCT D.ID, D.EMAIL, D.FIRST_NAME, D.LAST_NAME
FROM DEVELOPERS AS D
JOIN SKILLCODES AS S
    ON S.NAME IN ('Python','C#')
WHERE (D.SKILL_CODE & S.CODE) != 0
ORDER BY D.ID
