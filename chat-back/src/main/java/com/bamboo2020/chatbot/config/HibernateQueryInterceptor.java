package com.bamboo2020.chatbot.config;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.StringUtils;
import org.hibernate.EmptyInterceptor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Slf4j
public class HibernateQueryInterceptor extends EmptyInterceptor {

    private static final String MAX_COUNT = "10000";
    private Logger logger = LoggerFactory.getLogger(getClass());

    @Override
    public String onPrepareStatement(String sql) {

        logger.debug("HibernateQueryInterceptor.onPrepareStatement SQL Value : " + sql);

        // Insert Query Comment
        if (sql.startsWith("/* ")) {
            String comment = StringUtils.substringBetween(sql, "/* ", "*/");
            comment = " /* ".concat(comment).concat("*/");
            sql = StringUtils.substring(sql, comment.length());
            int index = sql.indexOf(" ");
            String query = StringUtils.substring(sql, 0, index).trim();
            sql = sql.replaceFirst(query, query.concat(comment));
        }

        //Maximum limit
//        if (sql.startsWith("SELECT /*") || sql.startsWith("select /*")) {
//            int dualFlag = sql.indexOf("DUAL");
//            if (!(sql.indexOf("DUAL") > 0 || sql.indexOf("dual") > 0)) {
//                sql = "SELECT * FROM (" + sql + ") WHERE ROWNUM <= " + MAX_COUNT;
//            }
//        }
        return super.onPrepareStatement(sql);
    }
}